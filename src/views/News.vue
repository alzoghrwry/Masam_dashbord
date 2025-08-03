<template>
  <div class="w-screen h-screen flex">
     <sidebar/>
    

    
    <div class="flex-1 bg-gray-100 overflow-y-auto">
     
      <Header />

     
      <div class="p-4">
        <News/>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import sidebar from '@/components/sidebar.vue';
import News from '@/components/News.vue';

</script>
