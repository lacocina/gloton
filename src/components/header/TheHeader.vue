<template>
<header :class="TheHeaderModule.theHeader">
  <nav :class="TheHeaderModule.nav">
    <the-header-item href="/" text="Front"/>
    <the-header-item href="/admin" text="Admin"/>
  </nav>
  <light-dark-mode/>
</header>
</template>

<script setup>
import TheHeaderModule from "@css/components/molecules/the-header.module.css"
import TheHeaderItem from "./TheHeaderItem.vue"
import LightDarkMode from "@components/header/LightDarkMode.vue"
</script>
