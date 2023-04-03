<template lang="pug">
div(:class="[oInset.oInset, oInset[size]]")
  slot
</template>

<script lang="ts" setup>
import oInset from '@css/objects/o-inset.module.css';
import { defineProps } from 'vue';

interface Props {
  size?: 'xs' | 'sm'
}

const props = defineProps<Props>();

</script>

