<template>
<button :type="buttonType" :class="[patata.common, patata[buttonStyle], margins.marginTop]">
    <slot/>
</button>
</template>

<script lang="ts" setup>
import margins from "@css/margin.module.css";
export interface Props {
  marginButton?: 10 | 20
  buttonType?: 'button' | 'submit'
  buttonStyle?: 'primary' | 'secondary'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  buttonType: 'button',
  buttonStyle: 'primary',
  disabled: false
})

</script>

<style lang="postcss" module="patata">
.common {
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
