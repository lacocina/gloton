<template lang="pug">
header.mb-8
  nav.gap-x-3.flex
    TheHeaderItem(
      href="/"
      text="Home"
    )
    TheHeaderItem(
      href="/detail"
      text="Detail"
    )
    TheHeaderItem(
      href="/management"
      text="Admin"
    )
</template>

<script setup>
import TheHeaderItem from "./TheHeaderItem.vue";
</script>

<style lang="postcss">
header {

}
</style>
