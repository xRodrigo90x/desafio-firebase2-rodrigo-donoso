import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import SignUpViews from '@/views/SignUpViews.vue';
import LogOutView from '@/views/LogOutView.vue';
import { auth, onAuthStateChanged } from '@/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const user = auth.currentUser;
        if (!user) {
          next('/signup');
        } else {
          next();
        }
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpViews,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      // beforeEnter: (to, from, next) => {
      //   const user = auth.currentUser;
      //   if (user) {
      //   return  to.path('/')
      //   } else {
      //     next();
      //   }

      // },
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogOutView,

    },
  ],
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser;

  // Si el usuario está autenticado y quiere acceder a login o signup, redirige al home
  if (user && (to.path === '/login' || to.path === '/signup')) {
    next('/'); // Redirige al home si está autenticado
  } else {
    next(); // Permite la navegación normal
  }
});
export default router;
