<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    id: String
})

const router = useRouter()

const producto = ref({})

const cargarProducto = async () => {

    const response = await axios.get(

        `http://127.0.0.1:8000/api/productos/${props.id}`
    )

    producto.value = response.data
}

onMounted(() => {
    cargarProducto()
})
</script>

<template>

<div>

    <h1>{{ producto.nombre }}</h1>

    <p>{{ producto.descripcion }}</p>

    <p>Precio: ${{ producto.precio }}</p>

    <p>Stock: {{ producto.stock }}</p>

    <button @click="router.back()">

        Volver

    </button>

</div>

</template>