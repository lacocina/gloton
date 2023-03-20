<template lang="pug">
router-link(
  :to="href"
  active-class="the-header-item--active"
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
  background-color: red;
}
</style>
