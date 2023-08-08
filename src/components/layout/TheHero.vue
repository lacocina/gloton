<template>
<section :class="hero.hero">
  <div v-if="imgSrc" :class="hero.imgWrapper">
      <img :src="imgSrc" :alt="title">
  </div>
  <div v-if="backButton" :class="hero.nav">
    <router-link :to="backPath" :class="hero.backButton" class="material-symbols-rounded">
        arrow_back_ios_new
    </router-link>
  </div>
  <div :class="hero.main">
    <h1 :class="txt.hero400">{{ title }}</h1>
    <h2 :class="txt.subtitle200">{{ subtitle }}</h2>
  </div>
</section>
</template>

<script lang="ts" setup>
import hero from "@css/components/molecules/hero.module.css"
import txt from "@css/components/atoms/txt.module.css"
import { useRouter } from "vue-router";

const router = useRouter()

interface Props {
  title: string,
  subtitle?: string,
  imgSrc?: string | undefined,
  backButton?: boolean
}

withDefaults(defineProps<Props>(), {
    backButton: false
})

// const backPath = router.currentRoute.value.matched[0].path
const backPath = '/admin/home'
</script>
