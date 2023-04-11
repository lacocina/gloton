<template>
    <the-hero :title="title" :subtitle="subtitle" :imgSrc="imgSrc"/>
    <o-inset :class="ContentPageModule.contentPage" size="xxl" modifier="stretch">
        <slot></slot>
    </o-inset>
    <the-footer/>
</template>

<script lang="ts" setup>
import ContentPageModule from "@css/components/molecules/content-page.module.css"
import TheFooter from "@components/layout/TheFooter.vue";
import TheHero from "@components/layout/TheHero.vue";
import OInset from "@components/objects/OInset.vue";
import { ref } from "vue";
import { getUrlPhoto } from "../../services/unsplash";

interface Props {
    title: string,
    subtitle?: string
}
defineProps<Props>()

const imgSrc = ref<String>('')
async function getImage() {
    imgSrc.value = await getUrlPhoto('HlNcigvUi4Q');
}
getImage();
</script>
