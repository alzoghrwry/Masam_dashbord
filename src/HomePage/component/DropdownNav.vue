<template>
  <div class="relative group w-full md:w-auto">
    <div class="flex items-center gap-1 hover:text-gray-400 dark:text-white text-lg w-full py-2 cursor-pointer">
      {{ label }}
      <i class="fas fa-caret-down"></i>
    </div>
    
    <div class="hidden group-hover:block absolute bg-white dark:text-white dark:bg-gray-700 mt-2 rounded-lg shadow-xl p-2 w-48 z-50">
      <div v-for="(item, index) in items" :key="index">
        <router-link
          :to="item.href"
          class="hover:text-primary dark:hover:text-blue-300 p-2 block"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  items: Array 
});
</script>
