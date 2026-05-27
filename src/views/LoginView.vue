<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const correo = ref('')
const password = ref('')

const login = () => {

    if (
        correo.value === 'admin@test.com'
        &&
        password.value === '123456'
    ) {

        router.push('/admin')

    } else {

        alert('Credenciales incorrectas')
    }
}

</script>

<template>

<div>

    <h1>Login</h1>

    <input
        v-model="correo"
        placeholder="Correo"
    >

    <input
        v-model="password"
        type="password"
        placeholder="Contraseña"
    >

    <button @click="login">

        Iniciar sesión

    </button>

</div>

</template>