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

<style lang="postcss">
@import "@csstools/bem-selectors.pcss";

.hello {
  @mixin btm-modifier variant {
    background-color: red;
    font-size: 30px;
  }
  @mixin hello var(--color-primary);
}
</style>
