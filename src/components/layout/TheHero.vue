<template lang="pug">
section(:class="hero.hero")
  div(:class="hero.imgWrapper")
    img(:src="imgSrc")
  div(v-if="false", :class="hero.nav")
    | top
  div(:class="hero.main")
    h1(:class="txt.hero400") {{ title }}
    h2(:class="txt.subtitle200") {{ subtitle }}
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import txt from "@css/components/atoms/txt.module.css"

interface Props {
  title: string,
  subtitle?: string,
  imgSrc: string,
  backButton?: boolean
}

const props = defineProps<Props>();
</script>

<style lang="scss" module="hero">
.hero {
  position: relative;
  min-height: 300px;
  color: white;
  padding: var(--spacing-xl);
  padding-bottom: calc(var(--content-page-overlap) + var(--spacing-md));
  display: grid;
  grid-auto-flow: row;
  grid-template:
      "top"
      "bottom"
  ;
  row-gap: var(--spacing-xl);
  align-content: space-between;
}

.img-wrapper {
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  width: 100%;

  &::before {
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    content: ' ';
    background:
        linear-gradient(
            180deg,
            rgba(black, 0) 0%,
            rgba(black, 0.5) 80%
        );
  }

  img {
    object-fit: cover;
    height: 100%;
  }
}

.nav,
.main {
  position: relative;
  z-index: 1;
}

.nav{
  grid-area: top;
}

.main{
  grid-area: bottom;
}
</style>
