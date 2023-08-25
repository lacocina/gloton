<template>
<the-hero :title="title"
          :subtitle="subtitle"
          :imgSrc="imgSrc"
          :back-button="backButton"
          :button="heroButton"/>
  <section :class="contentPage.contentPage">
      <slot></slot>
  </section>
<the-footer/>
</template>

<script lang="ts" setup>
import { getUrlPhoto } from "../../services/unsplash";
import { computedAsync } from "@vueuse/core";
import contentPage from "@css/components/molecules/content-page.module.css"
import TheFooter from "@components/layout/TheFooter.vue";
import TheHero from "@components/layout/TheHero.vue";

interface Props {
    title: string
    subtitle?: string
    backButton?: boolean
    heroButton?: object | undefined
    imgSrc?: string | undefined
}

withDefaults(defineProps<Props>(), {
    backButton: false
})
</script>
