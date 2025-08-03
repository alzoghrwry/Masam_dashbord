<template>
  <div class="bg-white dark:bg-[#1f2d2b] rounded-lg shadow p-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">قائمة المستخدمين</h2>
    
    <!-- ✅ التفاف الجدول لمنع الخروج -->
    <div class="overflow-x-auto max-w-full">
      <table class="w-full table-auto border border-gray-200 dark:border-gray-700 text-right text-gray-800 dark:text-gray-100 min-w-[600px]">
        <thead class="bg-gray-100 dark:bg-[#2e3c3a]">
          <tr>
            <th class="p-2 border dark:border-gray-700">الاسم</th>
            <th class="p-2 border dark:border-gray-700">البريد الإلكتروني</th>
            <th class="p-2 border dark:border-gray-700">الصلاحية</th>
            <th class="p-2 border dark:border-gray-700">العمليات</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in users"
            :key="index"
            class="hover:bg-gray-50 dark:hover:bg-[#33403e] transition-all"
          >
            <td class="p-2 border dark:border-gray-700">{{ user.name }}</td>
            <td class="p-2 border dark:border-gray-700">{{ user.email }}</td>
            <td class="p-2 border dark:border-gray-700">{{ user.role }}</td>
            <td class="p-2 border dark:border-gray-700">
              <div class="flex flex-wrap gap-2 justify-end">
                <button
                  @click="$emit('edit', index)"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition"
                >
                  تعديل
                </button>
                <button
                  @click="$emit('delete', index)"
                  class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm transition"
                >
                  حذف
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="users.length === 0">
            <td colspan="4" class="text-center text-gray-500 dark:text-gray-400 py-4">
              لا يوجد مستخدمين.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  name: 'UsersTable',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  emits: ['edit', 'delete']
};
</script>
