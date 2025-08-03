<template>
  <button @click="toggleTheme" class="text-xl">
    <i :class="isDark ? 'fas fa-sun text-gray-400' : 'fas fa-moon text-gray-800'"></i>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.theme = isDark.value ? 'dark' : 'light'
}
</script>
