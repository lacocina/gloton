<template lang="pug">
section(:class="heroModule.hero")
  div(:class="heroModule.imgWrapper")
    img(:src="imgSrc")
  div(v-if="false", :class="heroModule.nav")
    | top
  div(:class="heroModule.main")
    h1(:class="txt.hero400") {{ title }}
    h2(:class="txt.subtitle200") {{ subtitle }}
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
