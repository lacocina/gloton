<template>
  <div :class="[
      baseAlertModule.baseAlert,
      oInsetModule.oInset,
      statusColorsModule.bgColorInfo,
      small ?  baseAlertModule.small : ''
      ]">
      <span v-if="showIcon" class="material-symbols-rounded">
          {{ icon }}
      </span>
      <em>
        <slot/>
      </em>
  </div>
</template>

<script lang="ts" setup>
import oInsetModule from "@css/objects/o-inset.module.css"
import statusColorsModule from "@css/components/atoms/colors/status-colors.module.css"
import baseAlertModule from "@css/components/atoms/base-alert.module.css"
interface Props {
    icon?: string,
    showIcon?: boolean,
    small?: boolean
}

withDefaults(defineProps<Props>(), {
    icon: 'info',
    showIcon: true,
    small: false
})
</script>
