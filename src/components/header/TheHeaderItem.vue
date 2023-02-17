<template lang="pug">
router-link(
  :to="href"
  class="bg-green-700 hover:bg-green-800 py-2 px-6 rounded duration-200"
  active-class="the-header-item--active pointer-events-none"
  ) {{ text }}
</template>

<script lang="ts" setup>
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.the-header-item--active {
  @apply bg-red-500;
}
</style>
