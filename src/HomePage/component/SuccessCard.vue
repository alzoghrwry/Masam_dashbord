<template>
  <div
    @click="goToDetails"
    class="cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition"
  >
    <img :src="item.image" alt="صورة" class="rounded-t-lg w-full h-48 object-cover" />
    <div class="p-5">
      <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
      <p class="text-sm text-green-500 dark:text-gray-100 mb-2">{{ item.date }}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-300 line-clamp-3">
        {{ item.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'


const { item } = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const router = useRouter()

function goToDetails() {
  router.push({
    name: 'success-details',
    params: { id: item.id }
  })
}
</script>
