
<template>
  <div :class="['p-4 rounded shadow text-white', bgColor]">
    <h3 class="text-sm">{{ title }}</h3>
    <p class="text-2xl font-bold mt-1">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  color: String
})

const bgColor = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  indigo: 'bg-indigo-600',
  red: 'bg-red-600',
  orange: 'bg-orange-600'
}[color || 'blue']
</script>
