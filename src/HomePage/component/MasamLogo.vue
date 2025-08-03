

<template>
  <div class="flex items-center">
    <img :src="src" :alt="alt" class="h-22 w-auto" />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: '../src/assets/masam-logo-v2.png'
  },
  alt: {
    type: String,
    default: 'Masam'
  }
})
</script>
