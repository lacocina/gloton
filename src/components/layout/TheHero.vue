<template>
<header :class="hero.hero">
  <div v-if="imgSrc" :class="hero.imgWrapper">
      <img :src="imgSrc" :alt="title">
  </div>

  <base-back-button v-if="backButton"
                    :class="hero.backButton"/>

  <base-button v-if="button"
               :class="hero.optionButton" @click="button.onClick">
    {{ button.text }}
  </base-button>

  <div :class="hero.main">
    <h1 :class="txt.hero400">{{ title }}</h1>
    <h2 :class="txt.subtitle200">{{ subtitle }}</h2>
  </div>

</header>
</template>

<script lang="ts" setup>
import txt from "@css/components/atoms/txt.module.css"
import { useRouter } from "vue-router"
import BaseBackButton from "@components/ui/BaseBackButton.vue"
import BaseButton from "@components/ui/BaseButton.vue"
const router = useRouter()

interface Props {
  title: string
  subtitle?: string
  imgSrc?: string | undefined
  button?: object | undefined
  backButton?: boolean
}

withDefaults(defineProps<Props>(), {
    backButton: false
})

</script>

<style lang="scss" module="hero">
.hero {
  position: relative;
  min-height: 300px;
  color: white;
  background-color: var(--global-accent-color);
  padding: var(--spacing-xl);
  padding-bottom: calc(var(--content-page-overlap) + var(--spacing-md));
  display: grid;
  grid-auto-flow: row;
  grid-template:
      "backbutton optionbutton"
      "bottom bottom"
;
  row-gap: var(--spacing-xl);
  align-content: space-between;
  align-items: start;
  justify-content: space-between;
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

.back-button,
.option-button,
.main {
  position: relative;
  z-index: 1;
}

.back-button {
  grid-area: backbutton;
}

.option-button {
  grid-area: optionbutton;
  justify-self: end;
}

.main{
  grid-area: bottom;
}

</style>
