<script setup>

import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const producto = ref({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
})

const guardarProducto = async () => {

    try {

        await axios.post(
            'http://127.0.0.1:8000/api/productos',
            producto.value
        )

        alert('Producto creado')

        router.push('/catalogo')

    } catch (error) {

        console.log(error)

        alert('Error al guardar')
    }
}

</script>

<template>

<div>

    <h1>Nuevo producto</h1>

    <input
        v-model="producto.nombre"
        placeholder="Nombre"
    >

    <br><br>

    <textarea
        v-model="producto.descripcion"
        placeholder="Descripción"
    ></textarea>

    <br><br>

    <input
        v-model="producto.precio"
        type="number"
        placeholder="Precio"
    >

    <br><br>

    <input
        v-model="producto.stock"
        type="number"
        placeholder="Stock"
    >

    <br><br>

    <button @click="guardarProducto">

        Guardar producto

    </button>

</div>

</template>