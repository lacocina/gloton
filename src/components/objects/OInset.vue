<template lang="pug">
div(:class="[oInset.oInset, oInset[size], oInset[modifier]]")
  slot
</template>

<script lang="ts" setup>
import oInset from '@css/objects/o-inset.module.css';
import { defineProps } from 'vue';

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  modifier?: 'stretch' | 'squish' | 'section'
}

const props = defineProps<Props>();

</script>

