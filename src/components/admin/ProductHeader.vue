<template>
  <header :class="productHeader.header">
    <div :class="[oFlex.oFlex, oFlex.startCenter, uGap.lg]">
      <base-back-button/>
      <div>
        <div :class="oFlex.startCenter">
          <span>{{ categoryName }}</span>
          <span> / {{ subtitle }}</span>
        </div>
        <h2 v-if="productName" :class="[productHeader.title, txt.title300]">
          {{ productName }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import oFlex from "@css/objects/o-flex.module.css"
import uGap from "@css/utilities/u-gap.module.css"
import txt from "@css/components/atoms/txt.module.css"
import BaseBackButton from "@components/ui/BaseBackButton.vue"

interface Props {
  categoryName: string
  subtitle: string
  productName?: string
}

defineProps<Props>()
</script>

<style module="productHeader">
.title {
  color: var(--global-accent-color);
}

.header {
  border-bottom: 1px solid var(--bd-color-brand-softest);
  padding: 0 var(--content-page-x-padding) var(--content-page-x-padding);
  margin: 0 calc(var(--content-page-x-padding) * -1) var(--spacing-rem-xl);
}
</style>
