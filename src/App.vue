<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { auth, onAuthStateChanged } from '@/auth';
import { ref, onMounted } from 'vue';


const usuarioLogedo = ref(false);

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    usuarioLogedo.value = !!user;
  });
});
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-if="!usuarioLogedo" to="/signup">Sign Up</RouterLink>
        <RouterLink v-if="!usuarioLogedo" to="/login">Login</RouterLink>
        <RouterLink v-if="usuarioLogedo" to="/logOut">Logout</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
