<template>
<page-template title="Admin general" :back-button="showBackButton">
    <router-view></router-view>
</page-template>
</template>

<script lang="ts" setup>
import PageTemplate from "@components/layout/PageTemplate.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const showBackButton = computed(() : boolean => {
    const { name } = useRoute()
    return name !== 'admin-home'
})

</script>
