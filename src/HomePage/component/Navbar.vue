

<template>
  <nav
    :class="[
      isOpen ? 'flex' : 'hidden',
      'flex-col',
      'md:flex',
      
      'md:flex-row',
      'gap-4',
      'md:items-center',
      'absolute',
      'top-20',
      'left-0',
      'w-full',
      'md:static',
      'bg-white',
      'dark:bg-gray-800',
      'dark:text-white',
      'md:bg-transparent',
      'p-4',
      'md:p-0',
      'z-50',
      'shadow-lg',
      'md:shadow-none'
    ]"
  >

   
    <button @click="$emit('close')" class="md:hidden self-end mb-4 text-xl text-gray-600 dark:text-white">
      
    </button>
    <div class="flex justify-between">
    <ul class="flex flex-col md:flex-row  gap-6 md:gap-8 items-start md:items-center w-full">
      <NavItem href="/" label="الرئيسية" />
      <NavItem href="#" label="مسام" />
      <NavItem href="#" label="الأخبار" />
      <NavItem href="#" label="قصص النجاح" />

      <DropdownNav
        label="إعلام مسام"
        :items="[
          { label: 'الفيديوهات', href: '#' },
          { label: 'الصور', href: '#' },
          { label: 'قصص النجاح', href: '#' }
        ]"
      />

      <NavItem href="#contact" label="تواصل معنا" />

      <li class="w-full md:w-auto mt-4 md:mt-0">
        <div
          class="flex items-center border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700"
        >
          <i class="fas fa-search text-gray-500 dark:text-white"></i>
          <input
            type="text"
            placeholder="ابحث هنا"
            class="bg-transparent focus:outline-none w-full text-sm mr-2"
          />
        </div>
      </li>
    </ul>
    </div>
  </nav>
</template>
<script setup>
import NavItem from './NavItem.vue'
import DropdownNav from './DropdownNav.vue'





defineProps({
  isOpen: Boolean
})

defineEmits(['close'])
</script>


