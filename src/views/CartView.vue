<script setup>

import { useCarritoStore } from '../stores/carrito'

const carrito = useCarritoStore()

const finalizarCompra = () => {

    alert('Compra realizada')

    carrito.vaciar()
}

</script>

<template>

<div>

    <h1>Carrito</h1>

    <div
        v-for="item in carrito.items"
        :key="item.id"
    >

        <h3>{{ item.nombre }}</h3>

        <p>${{ item.precio }}</p>

        <button
            @click="
                carrito.cambiarCantidad(
                    item.id,
                    item.cantidad - 1
                )
            "
        >
            -
        </button>

        {{ item.cantidad }}

        <button
            @click="
                carrito.cambiarCantidad(
                    item.id,
                    item.cantidad + 1
                )
            "
        >
            +
        </button>

        <button
            @click="carrito.quitar(item.id)"
        >
            X
        </button>

        <hr>

    </div>

    <h2>

        Total:
        ${{ carrito.totalPrecio }}

    </h2>

    <button @click="carrito.vaciar()">

        Vaciar carrito

    </button>

    <button @click="finalizarCompra">

        Finalizar compra

    </button>

</div>

</template>