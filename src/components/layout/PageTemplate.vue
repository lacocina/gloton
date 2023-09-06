<template>
<the-hero :title="title"
          :subtitle="subtitle"
          :imgSrc="imgSrc"
          :back-button="backButton"
          :button="heroButton"/>
<section :class="contentPage.contentPage">
    <slot></slot>
</section>
</template>

<script lang="ts" setup>
import contentPage from "@css/components/molecules/content-page.module.css"
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
