<template>
<section :class="heroModule.hero">
  <div :class="heroModule.imgWrapper">
      <img :src="imgSrc" :alt="title">
  </div>
  <div v-if="false" :class="heroModule.nav">
    top
  </div>
  <div :class="heroModule.main">
    <h1 :class="txt.hero400">{{ title }}</h1>
    <h2 :class="txt.subtitle200">{{ subtitle }}</h2>
  </div>
</section>
</template>

<script lang="ts" setup>
import heroModule from "@css/components/molecules/hero.module.css"
import txt from "@css/components/atoms/txt.module.css"

interface Props {
  title: string,
  subtitle?: string,
  imgSrc: string,
  backButton?: boolean
}

defineProps<Props>();
</script>
