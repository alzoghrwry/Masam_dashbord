<template>
  <div class="p-4 space-y-6">
    <form @submit.prevent="addUser" class="space-y-4 bg-white dark:bg-[#1f2d2b] rounded-xl p-6 shadow">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
          {{ editingUserId !== null ? 'تعديل مستخدم' : 'إضافة مستخدم' }}
        </h2>
        <button
          v-if="editingUserId !== null"
          type="button"
          @click="resetForm"
          class="text-red-600 hover:underline text-sm"
        >
          إلغاء التعديل
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          v-model="form.name"
          type="text"
          placeholder="الاسم"
          class="input-style"
          required
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="البريد الإلكتروني"
          class="input-style"
          required
        />
        <input
          v-model="form.password"
          type="password"
          placeholder="كلمة المرور"
          class="input-style"
          required
        />
        <select v-model="form.role" class="input-style" required>
          <option disabled value="">اختر الصلاحية</option>
          <option>مدير</option>
          <option>موظف عادي</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
        >
          {{ editingUserId !== null ? 'تحديث' : 'إضافة' }}
        </button>
      </div>
    </form>

 
    <UsersTable :users="users" @edit="editUser" @delete="deleteUser" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UsersTable from './UsersTable.vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const API_URL = 'http://localhost:3001/users'

const form = ref({
  name: '',
  email: '',
  password: '',
  role: ''
})

const users = ref([])
const editingUserId = ref(null)


async function fetchUsers() {
  const res = await fetch(API_URL)
  users.value = await res.json()
}

onMounted(fetchUsers)


async function addUser() {
  try {
    if (editingUserId.value !== null) {
      await fetch(`${API_URL}/${editingUserId.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.value)
      })
      toast.success('تم تحديث المستخدم بنجاح')
    } else {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.value)
      })
      toast.success('تم إضافة المستخدم بنجاح')
    }

    resetForm()
    fetchUsers()
  } catch (err) {
    toast.error('حدث خطأ أثناء الحفظ')
  }
}


async function deleteUser(index) {
  const user = users.value[index]
  try {
    await fetch(`${API_URL}/${user.id}`, { method: 'DELETE' })
    fetchUsers()
    toast.success('تم حذف المستخدم')
  } catch {
    toast.error('تعذر حذف المستخدم')
  }
}


function editUser(index) {
  const user = users.value[index]
  form.value = { ...user }
  editingUserId.value = user.id
}


function resetForm() {
  form.value = { name: '', email: '', password: '', role: '' }
  editingUserId.value = null
}
</script>


