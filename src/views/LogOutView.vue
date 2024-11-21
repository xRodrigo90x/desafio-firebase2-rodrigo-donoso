<script setup>
import { signOut } from 'firebase/auth';
import { auth } from '@/auth';
import { useRouter } from 'vue-router'; 

const router = useRouter();

const logout = async () => {
  try {
    await signOut(auth);  
    router.push('/'); 
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};

logout();
</script>