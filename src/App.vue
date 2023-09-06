<template>
<notifications classes="custom-notification vue-notification"/>
<div :class="OPageModule.oPage">
  <o-inset size="xs" modifier="section">
    <the-header></the-header>
  </o-inset>
  <section :class="OPageModule.content">
    <router-view/>
  </section>
  <TheFooter/>
</div>
</template>
<script lang="ts" setup>
import TheHeader from './components/header/TheHeader.vue'
import OPageModule from "@css/objects/o-page.module.css"
import OInset from "@components/objects/OInset.vue"
import TheFooter from "@components/layout/TheFooter.vue"
</script>
