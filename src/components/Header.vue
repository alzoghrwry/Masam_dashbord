<template>
  <header class="w-full bg-gray-100 dark:bg-[#1e293b] shadow-sm h-[80px] sticky top-0 text-gray-900 dark:text-gray-100">
    <div class="flex items-center justify-between px-4 py-3 gap-4 flex-nowrap">
      
    
      <button class="text-gray-600 dark:text-gray-200 text-xl md:hidden shrink-0" @click="toggleMobileSearch">
        <i class="fas fa-search"></i>
      </button>

      <div class="flex-1 min-w-0 hidden md:block">
        <Search />
      </div>

      

      
         <Notifecation />
      <div class="flex items-center gap-2 shrink-0">
      
        <Mune />
        <img
          src="../assets/images/Ahmed.JPG"
          alt="User"
          class="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-600"
        />
      </div>
    </div>

 
    <div v-if="showMobileSearch" class="block md:hidden px-4 pb-3">
      <Search />
    </div>
  </header>
</template>

<script>
import Search from './Search.vue'
import Mune from './Mune.vue'
import Notifecation from './Notifecation.vue'

export default {
  components: {
    Search,
    Mune,
    Notifecation
  },
  data() {
    return {
      showMobileSearch: false
    }
  },
  methods: {
    toggleMobileSearch() {
      this.showMobileSearch = !this.showMobileSearch
    }
  }
}
</script>
