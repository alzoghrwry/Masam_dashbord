<template>
  <div class="relative">
    <button @click="togglePanel" class="text-gray-600 dark:text-light relative">
      <i class="fas fa-bell text-xl"></i>
      <span v-if="unreadCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
        {{ unreadCount }}
      </span>
    </button>

    <div v-if="panelOpen" class="absolute right-0 mt-2 w-80 bg-white dark:bg-dark-secondary shadow rounded p-3 z-50">
      <h3 class="font-bold mb-2 text-black dark:text-light">الإشعارات</h3>
      <ul>
        <li v-for="msg in unreadMessages" :key="msg.id" class="mb-2 text-sm text-gray-800 dark:text-muted">
          <p><strong>{{ msg.name }}</strong>: {{ msg.message }}</p>
          <small class="text-gray-500">{{ new Date(msg.createdAt).toLocaleString() }}</small>
        </li>
      </ul>
      <button
        v-if="unreadMessages.length"
        @click="markAllAsRead"
        class="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        تعليم الكل كمقروء
      </button>
      <p v-if="!unreadMessages.length" class="text-gray-500 dark:text-muted">لا إشعارات جديدة</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue' 

const unreadMessages = ref([])
const panelOpen = ref(false)

const fetchMessages = async () => {
  try {
    const res = await fetch('http://localhost:3001/messages')
    const data = await res.json()
    unreadMessages.value = data.filter(m => m.read === false)
  } catch (err) {
    console.error('فشل في جلب الإشعارات:', err)
  }
}

const markAllAsRead = async () => {
  for (const msg of unreadMessages.value) {
    await fetch(`http://localhost:3001/messages/${msg.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ read: true })
    })
  }
  await fetchMessages()
}

const togglePanel = async () => {
  panelOpen.value = !panelOpen.value
  if (panelOpen.value) await fetchMessages()
}

const unreadCount = computed(() => unreadMessages.value.length)

onMounted(() => {
  fetchMessages()
  setInterval(fetchMessages, 10000)
})
</script>

