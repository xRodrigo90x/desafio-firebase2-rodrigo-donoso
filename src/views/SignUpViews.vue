<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, auth } from '@/auth'

const email = ref("");
const password = ref("");

const errorMessages = {
    'auth/email-already-in-use': 'El correo electrónico ya está en uso.',
    'auth/weak-password': 'La contraseña es demasiado débil. Debe contener minimo 6 caracteres',
};

const registro = async () => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email.value, password.value)
        Swal.fire({
            title: "Good job!",
            text: `El usuario: ${user.email}, ha sido creado con exito`,
            icon: "success"
        });
    } catch (error) {
        const errorMessage = errorMessages[error.code];
        Swal.fire({
            title: "Registro inválido",
            text: errorMessage,
            icon: "error"
        });
    }
    email.value = ""
    password.value = ""
}

</script>


<template>
    <h1>Registro</h1>
    <div>
        <form @submit.prevent="registro">
            <input v-model="email" type="email" placeholder="Correo Electrónico">
            <input v-model="password" type="password" placeholder="Contraseña">
            <button type="submit">Registrarse</button>
        </form>
    </div>
</template>

<style scoped>
h1,
form {
    margin-top: 20px;
    text-align: center;
}
</style>