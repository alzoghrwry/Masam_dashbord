<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 shadow-md">
    <form @submit.prevent="handleLogin" class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
      <h2 class="text-xl font-semibold text-center">تسجيل الدخول</h2>
      <input v-model="email" type="email" placeholder="البريد الإلكتروني" class="border border-gray-300 rounded px-3 py-2 w-full" required />
      <input v-model="password" type="password" placeholder="كلمة المرور" class="border border-gray-300 rounded px-3 py-2 w-full" required />
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">دخول</button>
      <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const API_URL = 'http://localhost:3001/users'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

async function handleLogin() {
  error.value = ''

  try {
    const res = await fetch(`${API_URL}?email=${email.value}&password=${password.value}`)
    const users = await res.json()

    if (users.length > 0) {
      localStorage.setItem('loggedInUser', JSON.stringify(users[0]))
      router.push('/home') 
    } else {
      error.value = 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
    }
  } catch (err) {
    console.error(err)
    error.value = 'حدث خطأ أثناء الاتصال بالخادم'
  }
}
</script>
