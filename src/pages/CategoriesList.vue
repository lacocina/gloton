<template>
  <template v-if="businessStore.loading">
      Loading
  </template>
  <template v-else>
    <page-template :title="businessName">
        <o-stack size="xs">
          <h3 :class="txt.title200">Nuestra carta</h3>
          <base-card/>
          <base-card/>
          <base-card/>
        </o-stack>
    </page-template>
  </template>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useBusinessStore } from "../store/business"
import PageTemplate from "@components/layout/PageTemplate.vue"
import BaseCard from "@components/ui/BaseCard.vue"
import OStack from "@components/objects/OStack.vue"
import txt from "@css/components/atoms/txt.module.css"

const businessStore = useBusinessStore()

const businessName = computed(() => {
    return businessStore.business?.name ?? ''
})
</script>
