<!-- src/components/AppButton.vue -->
<template>
  <button
    :type="type"
    :class="[
      'rounded-xl border px-4 py-1 h-8 text-sm font-medium transition duration-150',
      variantClasses,
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  label: String,
  variant: {
    type: String,
    default: 'primary' 
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const variantClasses = {
  primary: 'bg-blue-600 text-white',
  danger: 'bg-red-600 text-white',
  success: 'bg-green-600 text-white',
  secondary: 'bg-gray-500 text-white'
}[props.variant] || 'bg-blue-600 text-white'
</script>
