<template>
  <div class="h-full bg-gray-800 text-white flex flex-col justify-between">
    
    <!-- العنوان والشعار -->
    <div class="h-[80px] bg-gray-300 flex items-center justify-center px-4">
      <img src="../assets/masam-logo-v2.png" class="w-10 h-auto rounded-xl" />
      <h3 class="font-bold text-xl text-black hidden md:block ml-3">لوحة تحكم</h3>
    </div>

    <!-- الروابط -->
    <nav class="flex-1 px-2 py-4 space-y-2">
      <router-link
        to="/home"
        class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition"
      >
        <i class="fas fa-home text-lg"></i>
        <span class="hidden md:inline">الرئيسية</span>
      </router-link>

      <router-link
        to="/users"
        class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition"
      >
        <i class="fas fa-users text-lg"></i>
        <span class="hidden md:inline">المستخدمين</span>
      </router-link>

      <router-link
        to="/news"
        class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition"
      >
        <i class="fas fa-newspaper text-lg"></i>
        <span class="hidden md:inline">الأخبار</span>
      </router-link>

      <router-link
        to="/story"
        class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition"
      >
        <i class="fas fa-chart-line text-lg"></i>
        <span class="hidden md:inline">قصص النجاح</span>
      </router-link>

      <router-link
        to="/gallery"
        class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition"
      >
        <i class="fas fa-images text-lg"></i>
        <span class="hidden md:inline">المعرض</span>
      </router-link>

      <router-link
        to="/settings"
        class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition"
      >
        <i class="fas fa-cog text-lg"></i>
        <span class="hidden md:inline">الإعدادات</span>
      </router-link>
    </nav>

    <!-- المستخدم -->
    <div class="px-4 py-4 border-t border-blue-800">
      <div class="flex items-center gap-3">
        <div class="relative">
          <img src="../images/Ahmed.JPG" alt="User" class="w-10 h-10 rounded-full" />
          <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <div class="hidden md:block">
          <p class="font-medium">أحمد محمد</p>
          <p class="text-blue-200 text-sm">مدير المنظمة</p>
        </div>
      </div>
    </div>
  </div>
</template>
