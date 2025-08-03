<template>
  <div class="relative inline-block text-right">
    
    <button
      @click="toggleMenu"
      class="inline-flex justify-center w-full rounded-md px-4 py-2 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-white "
    >
      {{ userRole }}
      <i class="fa-solid fa-angle-down ml-3 -mr-1 "></i>

    </button>

    <div
      v-if="isOpen"
      class=" origin-top-right absolute left-0 mt-2 w-20 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1  ring-opacity-5 focus:outline-none "
    >
      <div class="py-1">
        <a
          href="#"
          @click.prevent="logout"
          class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          تسجيل خروج
        </a>
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const router = useRouter()

function toggleMenu() {
  isOpen.value = !isOpen.value
}

const user = ref(null)

onMounted(() => {
  const storedUser = localStorage.getItem('loggedInUser')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }
})

// عرض الصلاحية فقط
const userRole = computed(() => {
  return user.value?.role || 'غير معروف'
})

// تسجيل الخروج
function logout() {
  localStorage.removeItem('loggedInUser')
  router.push('/')
}
</script>
