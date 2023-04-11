<template>
  <template v-if="businessStore.loading">
      Loading
  </template>
  <template v-else>
    <page-template :title="businessName">
        contenido
    </page-template>
  </template>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useBusinessStore } from "../store/business";
import PageTemplate from "@components/layout/PageTemplate.vue";

const businessStore = useBusinessStore()

const businessName = computed(() => {
    return businessStore.business?.name ?? ''
})
</script>
