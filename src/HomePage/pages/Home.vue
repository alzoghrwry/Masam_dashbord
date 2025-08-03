
<template>
  <div class="grid grid-rows-[auto_auto_auto_1fr_auto] h-full">
    <Header />
    <HeroSection/>
    <ProjectStats/>
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/HomePage/component/Headers.vue'
import Contact from '@/HomePage/component/Contacts.vue'

import Footer from '@/HomePage/component/Footer.vue'
import ProjectStats from '@/HomePage/component/ProjectStats.vue'
import HeroSection from '@/HomePage/component/HeroSection.vue'
</script>
