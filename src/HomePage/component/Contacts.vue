<template>
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-center mb-12 text-primary dark:text-blue-300">تواصل معنا</h2>
         <div class="flex flex-col lg:flex-row gap-8 dark:bg-primary">
        <form @submit.prevent="handleSubmit" class="w-full  dark:text-white p-6 rounded-xl shadow-lg space-y-6">
         
            <div>
            <label for="name" class="block text-lg mb-2">الاسم</label>
            <input id="name" v-model.trim="form.name"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                :class="{ 'border-red-500': errors.name }"
            />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">الاسم مطلوب.</p>
            </div>

    <div>
      <label for="email" class="block text-lg mb-2">البريد الإلكتروني</label>
      <input
        id="email"
        v-model.lazy="form.email"
        type="email"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
        :class="{ 'border-red-500': errors.email }"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">البريد الإلكتروني غير صالح.</p>
    </div>

   
    <div>
      <label for="message" class="block text-lg mb-2">الرسالة</label>
      <textarea
        id="message"
        v-model.trim="form.message"
        rows="5"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
        :class="{ 'border-red-500': errors.message }"
      ></textarea>
      <p v-if="errors.message" class="text-red-500 text-sm mt-1">يرجى كتابة الرسالة.</p>
    </div>

    <button
      type="submit"
      class="w-100  bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-3 px-4 rounded-lg transition duration-300" >
      إرسال 
    </button>
  </form>
    <div class="w-full lg:w-1/2">
            <div class="h-full rounded-xl overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829012.7510787119!2d42.87826538085938!3d13.478110769042724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x161c6b47afd77483%3A0x655be56fff27810!2sSanamat%2C%20Yemen!5e1!3m2!1sen!2s!4v1753448834110!5m2!1sen!2s" 
                class="w-full h-full min-h-[400px]" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: false,
  email: false,
  message: false
})

const validateForm = () => {
  errors.value.name = !form.value.name
  errors.value.email = !form.value.email || !/\S+@\S+\.\S+/.test(form.value.email)
  errors.value.message = !form.value.message

  return !errors.value.name && !errors.value.email && !errors.value.message
}

const handleSubmit = async () => {
  if (!validateForm()) return

  try {
    await fetch('http://localhost:3001/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form.value,
        read: false,
        createdAt: new Date().toISOString()
      })
    })

  
    form.value = { name: '', email: '', message: '' }

    alert('تم إرسال الرسالة بنجاح!')
  } catch (err) {
    console.error('فشل في إرسال الرسالة:', err)
    alert('حدث خطأ أثناء الإرسال، حاول لاحقاً')
  }
}
</script>

