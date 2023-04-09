<template lang="pug">
div(:class="[oStack.oStack, oStack[size]]")
  slot
</template>

<script lang="ts" setup>
import oStack from '@css/objects/o-stack.module.css';
import { defineProps } from 'vue';

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
}

const props = defineProps<Props>();

</script>

