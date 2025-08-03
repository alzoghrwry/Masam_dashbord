<template>
  <section class="py-16 bg-s dark:bg-gray-800 overflow-x-hidden">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-white text-center mb-12 dark:text-blue-300">
        إحصائيات المشروع
      </h2>

     
      <div class="flex flex-col md:flex-row gap-4 mb-8">
        <div class="flex-1 dark:bg-gray-700 rounded-xl p-6 text-center">
          <div class="text-5xl font-bold text-red-500 dark:text-blue-300 mb-2">505,466</div>
          <p class="mt-4 text-gray-100 dark:text-gray-400">
            إجمالي الأراضي التي تم تطهيرها
          </p>
        </div>
        <div class="flex-1 dark:bg-gray-700 rounded-xl p-6 text-center">
          <div class="text-5xl font-bold text-red-500 dark:text-blue-300 mb-2">68,338,920</div>
          <p class="mt-4 text-gray-100 dark:text-gray-400">
            إجمالي عمليات الإزالة منذ منتصف 2018
          </p>
        </div>
      </div>

      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(item, index) in stats"
          :key="index"
          class="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 flex items-center gap-4"
        >
          <img :src="item.icon" class="w-12 h-12 object-contain" :alt="item.label" />
          <div>
            <div class="text-2xl font-bold text-gray-800 dark:text-white">
              {{ item.number }}
            </div>
            <div class="mt-2 text-gray-600 dark:text-gray-400">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>

      <div v-if="error" class="text-white text-center mt-6">
        تعذر تحميل البيانات
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stats = ref([])
const error = ref(false)

onMounted(async () => {
  try {
    const res = await fetch('/data.json') 
    if (!res.ok) throw new Error('فشل في تحميل البيانات')
    const data = await res.json()
    stats.value = data
  } catch (err) {
    console.error('خطأ في تحميل البيانات:', err)
    error.value = true
  }
})
</script>
