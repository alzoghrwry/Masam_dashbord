<template>
     <div class="top-bar bg-gray-700 dark:bg-gray-800 h-10 flex justify-between items-center px-4">
     <button @click="toggleTheme" class="text-white">
    <i v-if="isDark" class="fas fa-moon text-white"></i>
    <i v-else class="fas fa-sun text-yellow-400"></i>
  </button>
       <div class="relative">
   
    <button
      @click="showLogin = true"
      class="text-white rounded-md border px-4 bg-green-700 hover:bg-green-800 transition"
    >
      تسجيل الدخول
    </button>

   
    <div
      v-if="showLogin"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative">
        <!-- زر الإغلاق -->
        <button
          @click="showLogin = false"
          class="absolute top-2 left-2 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>

        <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">
          تسجيل الدخول
        </h2>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <input
            v-model="email"
            type="email"
            placeholder="البريد الإلكتروني"
            class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="كلمة المرور"
            class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />

          <p v-if="error" class="text-sm text-red-500 text-center">{{ error }}</p>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            دخول
          </button>
        </form>
      </div>
    </div>
  </div>
  
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const showLogin = ref(false)
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

    const isDark = ref(false)

    const toggleTheme = () => {
      isDark.value = !isDark.value

      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      }
    }


    onMounted(() => {
      const savedTheme = localStorage.theme
      if (savedTheme === 'dark') {
        isDark.value = true
        document.documentElement.classList.add('dark')
      }
    })
   

const API_URL = 'http://localhost:3001/users'

async function handleLogin() {
  error.value = ''

  try {
    const res = await fetch(`${API_URL}?email=${email.value}&password=${password.value}`)
    const users = await res.json()

    if (users.length > 0) {
      localStorage.setItem('loggedInUser', JSON.stringify(users[0]))
      showLogin.value = false
      router.push('/home')
    } else {
      error.value = 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
    }
  } catch (err) {
    error.value = 'حدث خطأ أثناء الاتصال بالخادم'
  }
}

</script>
   
 


