<template lang="pug">
.container.mx-auto.px-4.mt-8
  TheHeader
  input(type="checkbox", checked)
  router-view(v-slot="{ Component }")
    keep-alive
      component(:is="Component")
</template>
<script lang="ts" setup>
import TheHeader from './components/header/TheHeader.vue'
</script>

