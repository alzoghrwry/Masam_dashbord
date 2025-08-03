<template>
  <div class="space-y-4">
    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="bg-white dark:bg-gray-900 p-6 rounded shadow space-y-4">
      <h2 class="text-xl font-semibold dark:text-white">إضافة خبر</h2>

      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <input
            v-model.trim="form.title"
            placeholder="عنوان الخبر"
            class="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-[#273834] text-gray-800 dark:text-white"
            type="text"
          />
          <span v-if="submitted && !form.title" class="text-red-600 text-sm">العنوان مطلوب</span>
        </div>

        <div>
          <input
            v-model="form.date"
            type="date"
            class="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-[#273834] text-gray-800 dark:text-white"
          />
          <span v-if="submitted && !form.date" class="text-red-600 text-sm">التاريخ مطلوب</span>
        </div>

        <div>
          <input
            type="file"
            @change="handleImage"
            accept="image/*"
            class="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-[#273834] text-gray-800 dark:text-white"
          />
          <img v-if="form.imagePreview" :src="form.imagePreview" class="w-20 mt-2 rounded border" />
        </div>
      </div>

      <div>
        <textarea v-model.trim="form.content" rows="4"  placeholder="محتوى الخبر"
          class="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-[#273834] text-gray-800 dark:text-white"
        />
        <span v-if="submitted && !form.content" class="text-red-600 text-sm">المحتوى مطلوب</span>
      </div>

      <button
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
      >
        {{ editId ? 'تحديث' : 'اضافة' }}
      </button>
    </form>

 
    <Table
      title="قائمة الاخبار"
      :headers="[
        { key: 'title', label: 'العنوان' },
        { key: 'date', label: 'التاريخ' },
        { key: 'image', label: 'الصورة', type: 'image' },
        { key: 'content', label: 'المحتوى' }
      ]"
      :items="filteredNews"
    >
      <template #actions="{ item }">
        <button
          @click="editNews(item)"
          class="px-3 py-1 rounded bg-yellow-400 text-white hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600"
        >
          تعديل
        </button>
        <button
          @click="deleteNews(item.id)"
          class="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 ml-2"
        >
          حذف
        </button>
      </template>
    </Table>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import { useToast } from 'vue-toastification'
import Table from '@/components/Table.vue'
import { useSearchStore } from '@/pinia/Search.js'

const API_URL = 'http://localhost:3001/news'
const toast = useToast()
const newsList = ref([])
const form = ref({ title: '', date: '', content: '', image: '', imagePreview: '' })
const editId = ref(null)
const submitted = ref(false)

const searchStore = useSearchStore()

onMounted(fetchNews)

async function fetchNews() {
  const res = await fetch(API_URL)
  newsList.value = await res.json()
}

async function handleSubmit() {
  submitted.value = true

  if (!form.value.title.trim() || !form.value.date || !form.value.content.trim()) {
    toast.error('يرجى تعبئة جميع الحقول المطلوبة')
    return
  }

  const payload = {
    title: form.value.title,
    date: form.value.date,
    content: form.value.content,
    image: form.value.image || ''
  }

  if (editId.value) {
    await fetch(`${API_URL}/${editId.value}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    toast.success('تم تحديث الخبر')
  } else {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, id: Date.now() })
    })
    toast.success('تمت إضافة الخبر')
  }

  resetForm()
  fetchNews()
}

function editNews(item) {
  form.value = {
    ...item,
    imagePreview: item.image || ''
  }
  editId.value = item.id
  submitted.value = false
}

async function deleteNews(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
  toast.success('تم حذف الخبر')
  fetchNews()
}

function handleImage(event) {
  const file = event.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    form.value.image = reader.result
    form.value.imagePreview = reader.result
  }
  reader.readAsDataURL(file)
}

function resetForm() {
  form.value = { title: '', date: '', content: '', image: '', imagePreview: '' }
  editId.value = null
  submitted.value = false
}

const filteredNews = computed(() =>
  newsList.value.filter(n =>
    n.title.includes(searchStore.query) || n.content.includes(searchStore.query)
  )
)
</script>
