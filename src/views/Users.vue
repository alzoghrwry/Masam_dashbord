<template>
  <div class="w-screen h-screen flex">
   

     <sidebar/>
    

   
    <div class="flex-1 bg-gray-100 overflow-y-auto">
     
      <Header />

      <div class="md:p-6">
        <Users />
      
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import sidebar from '@/components/sidebar.vue';
import Users from '@/components/Users.vue';

</script>
