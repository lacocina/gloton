<template lang="pug">
.container.mx-auto.px-4.mt-8
  TheHeader
  .hello hello
  .hello--variant hello variant
  keep-alive
    router-view
</template>
<script lang="ts" setup>
import TheHeader from './components/header/TheHeader.vue'
</script>
