<template>
<page-template title="Admin general" :back-button="showBackButton">
    <router-view/>
</page-template>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import PageTemplate from "@components/layout/PageTemplate.vue";

const route = useRoute()

const showBackButton = computed(() : boolean => {
    const { name } = useRoute()
    return name !== 'admin-home'
})

watch(route, () => {
    console.log('ha entrado y cambiado')
})

</script>
