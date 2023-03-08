<template lang="pug">
button.transition-colors.duration-300.px-5.py-2.rounded-sm.font-bold.text-lg(
  :type="buttonType"
  :class="[patata.common, patata[buttonStyle], margins.marginTop]"
) {{ msg }}
</template>

<script lang="ts" setup>
import { computed } from "vue";
import margins from "@css/margin.module.css";
export interface Props {
  msg: string
  marginButton: 10 | 20
  buttonType?: 'button' | 'submit'
  buttonStyle?: 'primary' | 'secondary'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  buttonType: 'button',
  buttonStyle: 'primary',
  disabled: false
})

const customMarginBottom = computed( () => {
  return props.marginButton + 'px'
})

</script>

<style lang="postcss" module="patata">
.common {
  margin-bottom: v-bind(customMarginBottom);
  margin-top: var(--large-space);
}

.primary {
  font-weight: bold;
  @apply bg-primary-500;

  &:hover {
    @apply bg-primary-600;
  }
}

.redButton {
  content: 'https://vitejs.dev/config/shared-options.html#css-modules';
  text-decoration: underline !important;
}

.secondary {
  @apply text-primary-500 border-primary-500 border;

  &:hover {
    @apply bg-primary-500;
    --tw-bg-opacity: 10%;
  }
}

</style>
