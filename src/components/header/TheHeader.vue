<template>
<header :class="TheHeaderModule.theHeader">
  <nav :class="TheHeaderModule.nav">
    <the-header-item href="/" text="Front"/>
    <the-header-item href="/admin" text="Admin"/>
    <the-header-item href="/css" text="CSS Docs"/>
  </nav>

  <select v-model="$i18n.locale">
    <option value="es-ES">
      es
    </option>
    <option value="en-US">
      en
    </option>
  </select>

  <light-dark-mode/>
</header>
</template>

<script setup>
import TheHeaderModule from "@css/components/molecules/the-header.module.css"
import TheHeaderItem from "./TheHeaderItem.vue";
import LightDarkMode from "@components/header/LightDarkMode.vue";
</script>
