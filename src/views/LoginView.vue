<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword, auth } from '@/auth';

const email = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email.value, password.value)
    Swal.fire({
      title: "Good job!",
      text: `Login exitoso, bienvenido ${user.email}`,
      icon: "success"
    });
    router.push('/')
  } catch (error) {
    Swal.fire({
      title: "Good job!",
      text: `Email o Password no coinciden`,
      icon: "error"
    });
  }
  email.value = ""
  password.value = ""
}

</script>


<template>
  <div>
    <h1>Login</h1>
    <div>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Correo Electrónico">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button type="submit">Inicio de Sesión</button>
      </form>
    </div>
  </div>
</template>

<style>
h1,
form {
  margin-top: 20px;
  text-align: center;
}
</style>
