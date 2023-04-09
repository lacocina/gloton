<template lang="pug">
header(:class="TheHeaderModule.theHeader")
  nav(:class="TheHeaderModule.nav")
    TheHeaderItem(
      href="/"
      text="Front"
    )
    TheHeaderItem(
      href="/management"
      text="Admin"
    )
    TheHeaderItem(
      href="/css"
      text="CSS Docs"
    )
</template>

<script setup>
import TheHeaderItem from "./TheHeaderItem.vue";
import TheHeaderModule from "@css/components/molecules/the-header.module.css"
</script>
