<script setup>
import Header from '@/components/Header.vue';
import sidebar from '@/components/sidebar.vue';
import Story from '@/components/Story.vue';
</script>

<template>
  <div class="w-screen h-screen flex">

     <sidebar/>
    

    <div class="flex-1 bg-gray-100 overflow-y-auto">
     
      <Header />

      <div class="p-4">
       
        <Story/>
      </div>
    </div>
  </div>
</template>


