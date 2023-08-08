<template>
<the-hero :title="title" :subtitle="subtitle" :imgSrc="imgSrc" :back-button="backButton"/>
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
    title: string,
    subtitle?: string
    backButton?: boolean
}

withDefaults(defineProps<Props>(), {
    backButton: false
})

const imgSrc = computedAsync(() => getUrlPhoto('HlNcigvUi4Q'))
</script>
