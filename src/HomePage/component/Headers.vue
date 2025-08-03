<script setup>
import { ref } from 'vue'
import Topbar from './Topbar.vue'
import MasamLogo from './MasamLogo.vue'
import Navbar from './Navbar.vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <Topbar />
  <div class="w-full sticky top-0 z-50 bg-gray-100 dark:bg-gray-500 shadow-md dark:text-white">
    <div class="max-w-7xl mx-auto flex justify-between items-center h-20 px-4 gap-20">

      <MasamLogo />
      <Navbar :is-open="isMenuOpen" />
      <button @click="toggleMenu" class="md:hidden text-2xl text-primary dark:text-gray-200">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
</template>
