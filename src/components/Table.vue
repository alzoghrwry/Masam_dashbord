<template>
  <div class="bg-white dark:bg-[#1f2d2b]  rounded shadow">
    <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{{ title }}</h2>

    <div class="overflow-x-auto">
      <table class="min-w-full text-right border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100">
        <thead class="bg-gray-100 dark:bg-[#2e3c3a]">
          <tr>
            <th
              v-for="header in headers"
              :key="header.key"
              class="p-2 border border-gray-200 dark:border-gray-700 dark:text-white whitespace-nowrap"
            >
              {{ header.label }}
            </th>
            <th class="p-4 border border-gray-200 dark:border-gray-700 dark:text-white whitespace-nowrap">العمليات</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="item in items"
            :key="item.id"
            class="hover:bg-gray-50 dark:hover:bg-[#33403e] transition-all"
          >
            <td
              v-for="header in headers"
              :key="header.key"
              class="p-2 border border-gray-200 dark:border-gray-700 dark:text-white whitespace-nowrap"
            >
              <img
                v-if="header.type === 'image'"
                :src="item[header.key]"
                class="w-16 h-16 rounded object-cover"
              />
              <span v-else>{{ item[header.key] }}</span>
            </td>

            <td class="p-2 border border-gray-200 dark:border-gray-700 whitespace-nowrap">
              <slot name="actions" :item="item" />
            </td>
          </tr>

          <tr v-if="items.length === 0">
            <td
              :colspan="headers.length + 1"
              class="text-center py-4 text-gray-500 dark:text-gray-400"
            >
              لا توجد بيانات
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script setup>
defineProps({
  title: String,
  headers: Array,
  items: Array
})
</script>
