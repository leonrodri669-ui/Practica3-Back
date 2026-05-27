<script setup>

import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { useCarritoStore } from '../stores/carrito'

const carrito = useCarritoStore()

const productos = ref([])

const busqueda = ref('')

const cargarProductos = async () => {

    const response = await axios.get(
        'http://127.0.0.1:8000/api/productos'
    )

    productos.value = response.data
}

const productosFiltrados = computed(() =>

    productos.value.filter(p =>

        p.nombre.toLowerCase()
        .includes(busqueda.value.toLowerCase())
    )
)

onMounted(() => {
    cargarProductos()
})

</script>

<template>

<div>

    <h1>Catálogo</h1>

    <input
        v-model="busqueda"
        placeholder="Buscar producto"
    >

    <div
        v-for="producto in productosFiltrados"
        :key="producto.id"
    >

        <h3>{{ producto.nombre }}</h3>

        <p>${{ producto.precio }}</p>

        <button @click="carrito.agregar(producto)">

            <template
                v-if="
                    carrito.cantidadDeProducto(producto.id) > 0
                "
            >

                En carrito
                (
                {{ carrito.cantidadDeProducto(producto.id) }}
                )

            </template>

            <template v-else>

                Agregar al carrito

            </template>

        </button>

        <br><br>

        <router-link :to="`/catalogo/${producto.id}`">

            Ver detalle

        </router-link>

        <hr>

    </div>

</div>

</template>