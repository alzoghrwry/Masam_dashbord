<!-- SearchBar.vue -->
<template>
  <div class="relative w-full max-w-md">
    <input
      type="text"
      v-model="search"
      @input="handleInput"
      placeholder="ابحث هنا..."
      class="w-full  md:w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 dark:border-gray-600dark:bg-[#273834] text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none transition"
    />
    <i class="pi pi-search absolute left-3 top-2.5 text-gray-400 dark:text-gray-300"></i>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '@/pinia/Search'
import { debounce } from 'lodash-es'

const store = useSearchStore()
const search = ref(store.query)

const handleInput = debounce(() => {
  store.setQuery(search.value)
}, 300)
</script>
