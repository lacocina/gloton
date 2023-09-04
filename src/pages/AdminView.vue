<template>
<page-template v-if="adminGenericView" :title="pageTitle" :back-button="showBackButton" :img-src="imgSrc">
    <router-view/>
</page-template>
<router-view v-else/>
</template>

<script lang="ts" setup>
// TODO - Repetir componente en cada página del Admin
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import { useI18n } from "vue-i18n"
import PageTemplate from "@components/layout/PageTemplate.vue"
import { computedAsync } from "@vueuse/core"
import { getUrlPhoto } from "../services/unsplash.ts"

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

const adminGenericView = computed(() : boolean => {
    const { meta } = useRoute()
    return meta.pageHeader || false
})

const imgSrc = computedAsync(() => getUrlPhoto('HlNcigvUi4Q'))
</script>
