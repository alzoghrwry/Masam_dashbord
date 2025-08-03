<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold mb-6 dark:text-black">الإعدادات</h1>

    <div class="flex gap-4 flex-wrap">
     
      <button
        @click="toggleTheme"
        class="flex items-center gap-2 px-4 py-2 rounded transition
               bg-gray-200 hover:bg-gray-300 text-gray-800
               dark:bg-[#273834] dark:hover:bg-[#33494a] dark:text-white"
      >
        <i :class="isDark ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-gray-800 dark:text-yellow-400'"></i>
        
      </button>

     
      <button
        @click="resetData"
        class="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white transition"
      >
        إعادة تعيين جميع البيانات
      </button>

     
      <button
        @click="clearLocalStorage"
        class="px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-white transition"
      >
        مسح التخزين المحلي
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isDark = ref(false)
const API_URL = 'http://localhost:3001'

const toggleTheme = () => {
  const current = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', current)
  document.documentElement.classList.toggle('dark', current === 'dark')
  isDark.value = current === 'dark'
}

onMounted(() => {
  const saved = localStorage.getItem('theme') || 'light'
  document.documentElement.classList.toggle('dark', saved === 'dark')
  isDark.value = saved === 'dark'
})

const clearLocalStorage = () => {
  localStorage.clear()
  alert('تم مسح التخزين المحلي')
}

const resetData = async () => {
  try {
    const endpoints = ['stories', 'news', 'users']
    for (const key of endpoints) {
      const res = await fetch(`${API_URL}/${key}`)
      const items = await res.json()
      await Promise.all(
        items.map(item =>
          fetch(`${API_URL}/${key}/${item.id}`, { method: 'DELETE' })
        )
      )
    }

    alert('تمت إعادة التعيين بنجاح!')
  } catch (err) {
    console.error('خطأ أثناء إعادة التعيين:', err)
    alert('حدث خطأ أثناء إعادة التعيين')
  }
}
</script>
