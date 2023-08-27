<template>
<button :type="buttonType"
        :class="[
            baseButton.common,
            baseButton[buttonStyle],
            baseButton[buttonSize],
            disabled ? 'disabled' : ''
        ]">
    <slot/>
</button>
</template>

<script lang="ts" setup>
export interface Props {
  marginButton?: 10 | 20
  buttonType?: 'button' | 'submit'
  buttonSize?: 'sm' | 'md'
  buttonStyle?: 'primary' | 'secondary'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  buttonType: 'button',
  buttonStyle: 'primary',
  buttonSize: 'md',
  disabled: false
})

</script>

<style lang="scss" module="baseButton">
@use "../../css/tools/dark-selector" as *;

.common {
  transition: var(--transition-duration-500);
  border-color: transparent;
  font-weight: bold;
  cursor: pointer;
  border-radius: var(--border-radius-xs);
}

.sm {
  padding: var(--spacing-rem-xs) var(--spacing-md);
  font-size: var(--font-size-100);
}

.md {
  padding: var(--spacing-rem-xs) var(--spacing-md);
  font-size: var(--font-size-200);
}

.primary {
  background-color: var(--global-accent-color);
  color: white;

  &:hover {
    background-color: var(--color-brand-primary-600);
  }
}

.secondary {
  background-color: transparent;
  border: 1px solid var(--color-gray-200);
  color: var(--global-accent-color);

  &:hover {
    background-color: var(--color-brand-primary-50);
  }

  @include t-dark-mode {
    border-color: var(--color-gray-700);

    &:hover {
      background-color: var(--color-gray-800);
    }
  }
}

</style>
