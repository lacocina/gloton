<template>
<div :class="OPageModule.oPage">
  <o-inset size="xs" modifier="section">
    <the-header></the-header>
  </o-inset>
  <section :class="OPageModule.content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </section>
</div>
</template>
<script lang="ts" setup>
import TheHeader from './components/header/TheHeader.vue'
import OPageModule from "@css/objects/o-page.module.css"
import OInset from "@components/objects/OInset.vue"
</script>
