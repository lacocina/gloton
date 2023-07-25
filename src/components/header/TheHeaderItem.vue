<template>
<router-link :to="href"
             :class="TheHeaderModule.item"
             :active-class="TheHeaderModule.active">
  {{ text }}
</router-link>
</template>

<script lang="ts" setup>
import TheHeaderModule from "@css/components/molecules/the-header.module.css"

defineProps({
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
