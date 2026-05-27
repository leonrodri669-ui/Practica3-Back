<script setup>

import axios from 'axios'
import { reactive, ref } from 'vue'

const loading = ref(false)

const mensaje = ref('')

const preview = ref(null)

const imagen = ref(null)

const form = reactive({

    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
})

const onImageChange = (e) => {

    const file = e.target.files[0]

    if (!file) return

    imagen.value = file

    preview.value = URL.createObjectURL(file)
}

const guardar = async () => {

    if (!form.nombre || !form.precio) {

        mensaje.value = 'Completa campos obligatorios'

        setTimeout(() => {

            mensaje.value = ''

        }, 3000)

        return
    }

    loading.value = true

    try {

        const fd = new FormData()

        fd.append('nombre', form.nombre)
        fd.append('descripcion', form.descripcion)
        fd.append('precio', form.precio)
        fd.append('stock', form.stock)

        if (imagen.value) {

            fd.append('imagen', imagen.value)
        }

        await axios.post(

            'http://127.0.0.1:8000/api/productos',

            fd,

            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )

        mensaje.value = 'Producto creado'

        form.nombre = ''
        form.descripcion = ''
        form.precio = ''
        form.stock = ''

        preview.value = null

        setTimeout(() => {

            mensaje.value = ''

        }, 3000)

    } catch (error) {

        console.log(error)

        mensaje.value = 'Error al guardar'
    }

    loading.value = false
}

</script>

<template>

<div>

    <h1>Nuevo producto</h1>

    <p v-if="mensaje">

        {{ mensaje }}

    </p>

    <input
        v-model="form.nombre"
        placeholder="Nombre"
    >

    <br><br>

    <textarea
        v-model="form.descripcion"
        placeholder="Descripción"
    ></textarea>

    <br><br>

    <input
        v-model="form.precio"
        type="number"
        placeholder="Precio"
    >

    <br><br>

    <input
        v-model="form.stock"
        type="number"
        placeholder="Stock"
    >

    <br><br>

    <input
        type="file"
        accept="image/*"
        @change="onImageChange"
    >

    <br><br>

    <img
        v-if="preview"
        :src="preview"
        width="200"
    >

    <br><br>

    <button @click="guardar">

        <span v-if="loading">

            Guardando...

        </span>

        <span v-else>

            Guardar producto

        </span>

    </button>

</div>

</template>