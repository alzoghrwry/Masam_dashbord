
<template>
  <button
    v-if="isInternalSection"
    @click="scrollToSection"
    class="px-4 py-2 hover:text-primary transition"
  >
    {{ label }}
  </button>

  <RouterLink
    v-else
    :to="href"
    class="px-4 py-2 hover:text-primary transition"
  >
    {{ label }}
  </RouterLink>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  href: String,
  label: String
})

const router = useRouter()


const isInternalSection = computed(() => props.href.startsWith('#'))

function scrollToSection() {
  const sectionId = props.href.replace('#', '')
  const el = document.getElementById(sectionId)

  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  } else {
   
    router.push({ path: '/', hash: props.href }).catch(() => {})
  }
}

</script>
