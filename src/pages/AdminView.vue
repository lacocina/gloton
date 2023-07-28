<template>
<page-template :title="pageTitle" :back-button="showBackButton">
    <router-view/>
</page-template>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import PageTemplate from "@components/layout/PageTemplate.vue";

const i18n = useI18n()

const showBackButton = computed(() : boolean => {
    const { name } = useRoute()
    return name !== 'admin-home'
})

const pageTitle = computed(() : string => {
    const { meta } = useRoute()
    const idPageTranslate: string = meta.pageHeader || 'home'
    return i18n.t(`admin.pageHeaders.${idPageTranslate}`)
})
</script>
