<script setup>

import CartIcon from '../components/CartIcon.vue'

</script>

<template>

<div style="display:flex">

    <aside
        style="
            width:200px;
            background:#eee;
            padding:20px;
        "
    >
        <CartIcon />
        <h2>Admin</h2>

        <router-link to="/admin">

            Dashboard

        </router-link>

        <br><br>

        <router-link to="/admin/productos">

            Productos

        </router-link>

        <br><br>

        <router-link to="/admin/nuevo">

            Nuevo producto

        </router-link>

    </aside>

    <main style="padding:20px">

        <router-view />

    </main>

</div>

</template>