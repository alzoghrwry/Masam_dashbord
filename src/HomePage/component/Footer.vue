<template>

    <div class="bg-gray-700 dark:bg-gray-800 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
         <MasamLogo />
          <p class="mt-4">مشروع مسام لنزع الألغام من الأراضي اليمنية لإنقاذ الأرواح وإعادة الأمل.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">روابط سريعة</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-blue-200">الرئيسية</a></li>
            <li><a href="#" class="hover:text-blue-200">من نحن</a></li>
            <li><a href="#" class="hover:text-blue-200">الأخبار</a></li>
            <li><a href="#" class="hover:text-blue-200">التواصل</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">مشروع مسام</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-blue-200">مسام</a></li>
            <li><a href="#" class="hover:text-blue-200">شاركنا رأيك</a></li>
            <li><a href="#" class="hover:text-blue-200">سياسة الخصوصية</a></li>
            <li><a href="#" class="hover:text-blue-200">الأسئلة الشائعة</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">تابعنا</h3>
          <div class="flex space-x-4 mb-6">
            <a href="#" class="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-300">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-500">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-500">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <p>البريد الإلكتروني: info@masam.org</p>
          <p class="mt-2">الهاتف: +967 772417117  </p>
        </div>
      </div>
      
      <div class="border-t border-blue-400 pt-6 text-center">
        <p>جميع الحقوق محفوظة &copy; <span id="year"></span> مشروع مسام</p>
      </div>
    </div>
    </div>
</template>
<script>
import MasamLogo from './MasamLogo.vue';

</script>