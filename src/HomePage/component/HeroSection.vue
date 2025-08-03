<template>
    <div class="p-4">
  <div class="relative w-full overflow-hidden ">
    <div class="relative h-56 rounded-lg md:h-96">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 transition-opacity duration-700 ease-in-out"
        :class="{
          'opacity-0': currentSlide !== index,
          'opacity-100 z-10': currentSlide === index,
        }"
      >
        <img
          :src="slide"
          alt="image"
          class="absolute w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>

   
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button
        v-for="(slide, index) in slides"
        :key="'indicator-' + index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full"
        :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
        :aria-label="`الانتقال للشريحة ${index + 1}`"
      ></button>
    </div>

  
    <button
      @click="prevSlide"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
    >
      <span class="w-10 h-10 bg-white/30 dark:bg-gray-800/30 rounded-full flex items-center justify-center group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
  <i class="fas fa-chevron-left text-white dark:text-gray-800"></i>
</span>
    </button>

   
    <button @click="nextSlide"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
    >
      <span class="w-10 h-10 bg-white/30 dark:bg-gray-800/30 rounded-full flex items-center justify-center group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
        <i class="fas fa-chevron-right text-white dark:text-gray-800 text-sm"></i>
     </span>

     
    </button>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'


const slides = ref([
  '../../src/assets/images/1.jpg',
  '../../src/assets/images/2.jpg',
  '../../src/assets/images/3.jpg',
  '../../src/assets/images/4.jpg',
  
])

const currentSlide = ref(0)
let intervalId = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}
onMounted(() => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 5000)
})
</script>
