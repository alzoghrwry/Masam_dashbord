<template>
  <div class="space-y-4">
   
    <form @submit.prevent="handleSubmit" class="bg-white dark:bg-gray-900 p-6 rounded shadow space-y-4">
      <h2 class="text-xl font-semibold dark:text-white">إضافة قصة نجاح</h2>

      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <input v-model.trim="form.title" placeholder="عنوان القصة"
            class="input dark:bg-[#273834] text-gray-800 dark:text-white w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600" type="text" />
          <span v-if="submitted && !form.title" class="text-red-600 text-sm">العنوان مطلوب</span>
        </div>

        <div>
          <input v-model="form.date" type="date"
            class="input dark:bg-[#273834] text-gray-800 dark:text-white w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600" />
          <span v-if="submitted && !form.date" class="text-red-600 text-sm">التاريخ مطلوب</span>
        </div>

        <div>
          <input type="file" @change="handleImage" accept="image/*"
            class="input dark:bg-[#273834] text-gray-800 dark:text-white w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600" />
          <div v-if="form.imagePreview" class="mt-2">
            <img :src="form.imagePreview" class="w-24 h-24 object-cover rounded border" />
          </div>
          <span v-if="submitted && !form.image" class="text-red-600 text-sm">الصورة مطلوبة</span>
        </div>
      </div>

      <div>
        <textarea v-model.trim="form.content" rows="4" placeholder="محتوى القصة"
          class="input dark:bg-[#273834] text-gray-800 dark:text-white w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600" />
        <span v-if="submitted && !form.content" class="text-red-600 text-sm">المحتوى مطلوب</span>
      </div>

      <button
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition">
        {{ editId ? 'تحديث القصة' : 'إضافة القصة' }}
      </button>
    </form>

    
    <Table
      title="القصص المحفوظة"
      :headers="[
        { key: 'image', label: 'الصورة', type: 'image' },
        { key: 'title', label: 'العنوان' },
        { key: 'date', label: 'التاريخ' },
        { key: 'content', label: 'المحتوى' }
      ]"
      :items="filteredNews"
    >
      <template #actions="{ item }">
        <button @click="editStory(item)"
          class="px-3 py-1 rounded bg-yellow-400 text-white hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600">
          تعديل
        </button>
        <button @click="deleteStory(item.id)"
          class="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 ml-2">
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


const toast = useToast()

const form = ref({
  image: '',
  imagePreview: '',
  title: '',
  date: '',
  content: ''
})

const stories = ref([])
const editId = ref(null)
const submitted = ref(false)
const API_URL = 'http://localhost:3001/stories'
const searchStore = useSearchStore()

onMounted(fetchStories)

async function fetchStories() {
  try {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error('فشل في تحميل القصص')
    stories.value = await res.json()
  } catch (err) {
    toast.error('تعذر تحميل القصص')
  }
}

async function handleSubmit() {
  submitted.value = true

  if (!form.value.title || !form.value.date || !form.value.image || !form.value.content) {
    toast.error('يرجى تعبئة جميع الحقول')
    return
  }

  try {
    if (editId.value) {
      await fetch(`${API_URL}/${editId.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form.value })
      })
      toast.success('تم تحديث القصة بنجاح')
    } else {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form.value })
      })
      toast.success('تمت إضافة القصة بنجاح')
    }

    resetForm()
    fetchStories()
  } catch (err) {
    toast.error(' حثت مشكله اثناء الحفظ  ')
  }
}

async function deleteStory(id) {
  if (!confirm('هل أنت متأكد من الحذف؟')) return
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    toast.success('تم حذف القصة')
    fetchStories()
  } catch (err) {
    toast.error('فشل في الحذف')
  }
}

function editStory(story) {
  form.value = {
    ...story,
    imagePreview: story.image
  }
  editId.value = story.id
  submitted.value = false
  toast.info('يمكنك تعديل القصة الآن')
}

function resetForm() {
  form.value = { image: '', imagePreview: '', title: '', date: '', content: '' }
  editId.value = null
  submitted.value = false
}

function handleImage(e) {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    form.value.image = reader.result
    form.value.imagePreview = reader.result
  }
  reader.readAsDataURL(file)
}
const filteredNews = computed(() =>
  stories.value.filter(s =>
    s.title.includes(searchStore.query) || s.content.includes(searchStore.query)
  )
)

</script>
