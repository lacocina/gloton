<template>
<notifications classes="custom-notification vue-notification"/>
<div :class="OPageModule.oPage">
  <the-header/>
  <section :class="OPageModule.content">
    <router-view/>
  </section>
  <TheFooter/>
</div>
</template>
<script lang="ts" setup>
import TheHeader from './components/header/TheHeader.vue'
import OPageModule from "@css/objects/o-page.module.css"
import TheFooter from "@components/layout/TheFooter.vue"
</script>
