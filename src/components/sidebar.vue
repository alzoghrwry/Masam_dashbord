<template>
  <div :class="['h-100vh transition-all duration-300', 
                'bg-[#20503c] dark:bg-[#122c23]', 
                isCollapsed ? 'w-[80px]' : 'w-[250px]']">

    <div class="h-[80px] flex items-center justify-between px-4 bg-[#e4a36e] dark:bg-[#b06c3e]">
      <div class="flex items-center gap-2">
        <div class="w-10">
          <img src="../assets/masam-logo-v2.png" class="w-full" />
        </div>
        <div v-if="!isCollapsed" class="text-black text-nowrap dark:text-white">
          <h3 class="font-bold text-xl">لوحة تحكم</h3>
        </div>
      </div>

      <button @click="toggleSidebar" class="text-black dark:text-white text-xl md:hidden focus:outline-none">
        <i :class="isCollapsed ? 'fas fa-angle-right' : 'fas fa-angle-left'"></i>
      </button>
    </div>

    <!-- روابط القائمة -->
    <div class="px-[10px] flex flex-col space-y-2 mt-4">
      <router-link to="/home" class="flex items-center py-2 px-2 text-white hover:text-[#A0F0E0] dark:hover:text-[#A0F0E0]">
        <i class="fas fa-home text-lg w-6"></i>
        <span v-if="!isCollapsed" class="ml-2">الرئيسية</span>
      </router-link>

      <router-link to="/users" class="flex items-center py-2 px-2 text-white hover:text-[#A0F0E0] dark:hover:text-[#A0F0E0]">
        <i class="fas fa-users text-lg w-6"></i>
        <span v-if="!isCollapsed" class="ml-2">المستخدمين</span>
      </router-link>

      <router-link to="/news" class="flex items-center py-2 px-2 text-white hover:text-[#A0F0E0] dark:hover:text-[#A0F0E0]">
        <i class="fas fa-newspaper text-lg w-6"></i>
        <span v-if="!isCollapsed" class="ml-2">الأخبار</span>
      </router-link>

      <router-link to="/story" class="flex items-center py-2 px-2 text-white hover:text-[#A0F0E0] dark:hover:text-[#A0F0E0]">
        <i class="fas fa-chart-line text-lg w-6"></i>
        <span v-if="!isCollapsed" class="ml-2">قصص النجاح</span>
      </router-link>

      <router-link to="/gallery" class="flex items-center py-2 px-2 text-white hover:text-[#A0F0E0] dark:hover:text-[#A0F0E0]">
        <i class="fas fa-images text-lg w-6"></i>
        <span v-if="!isCollapsed" class="ml-2">المعرض</span>
      </router-link>

      <router-link to="/settings" class="flex items-center py-2 px-2 text-white hover:text-[#A0F0E0] dark:hover:text-[#A0F0E0]">
        <i class="fas fa-cog text-lg w-6"></i>
        <span v-if="!isCollapsed" class="ml-2">الإعدادات</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isCollapsed = ref(false)

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value
}

function handleResize() {
  isCollapsed.value = window.innerWidth < 768
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
