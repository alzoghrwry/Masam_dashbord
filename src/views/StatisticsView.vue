<template>
  <div class="p-6 dark:bg-gray-900 dark:text-white min-h-screen">
    <h1 class="text-2xl font-bold mb-6">إحصائيات لوحة التحكم</h1>

    <div class="grid md:grid-cols-2 gap-6">
     
      <div class="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 class="text-lg font-semibold mb-2">عدد قصص النجاح</h2>
        <LineChart v-if="successData" :data="successData" />
      </div>

      
      <div class="bg-white dark:bg-gray-800 p-4 rounded shadow ">
        <h2 class="text-lg font-semibold mb-2">نسب عامة</h2>
        <PieChart v-if="pieData" :data="pieData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LineChart from '@/components/LineChart.vue'
import PieChart from '@/components/PieChart.vue'

const stories = ref([])
const users = ref([])
const news = ref([])

const successData = ref(null)
const pieData = ref(null)

const API_URL = 'http://localhost:3001'

onMounted(async () => {
  try {
    const [sRes, uRes ,nRes] = await Promise.all([
      fetch(`${API_URL}/stories`),
      fetch(`${API_URL}/users`),
      fetch(`${API_URL}/news`)
    ])
    stories.value = await sRes.json()
    users.value = await uRes.json()
    news.value = await nRes.json()

    successData.value = {
      labels: ['قصص النجاح'],
      datasets: [
        {
          label: 'عدد القصص',
          data: [stories.value.length],
          backgroundColor: '#3b82f6'
        }
      ]
    }

    pieData.value = {
      labels: ['قصص النجاح', 'المستخدمين','الأخبار'],
      datasets: [
        {
          label: 'الإجمالي',
          data: [stories.value.length, users.value.length, news.value.length],
          backgroundColor: ['#20503c', '#10b981' ,'#e4a36e']
        }
      ]
    }

  } catch (error) {
    console.error('خطأ في جلب البيانات:', error)
  }
})
</script>
