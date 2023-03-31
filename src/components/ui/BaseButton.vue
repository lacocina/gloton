<template lang="pug">
button(
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
  margin-top: 2rem;
}

.primary {
  font-weight: bold;

  &:hover {
    background-color: orange;
  }
}

.redButton {
  content: 'https://vitejs.dev/config/shared-options.html#css-modules';
  text-decoration: underline !important;
}

.secondary {
  border: 1px solid orange;

  &:hover {
    background-color: orange;
    --tw-bg-opacity: 10%;
  }
}

</style>
