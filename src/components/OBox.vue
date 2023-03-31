<template lang="pug">
div(:class="[oBoxCss.oBox, oBoxCss[size]]")
  slot
</template>

<script lang="ts" setup>
import oBoxCss from '@css/objects/o-box.module.css';
import { defineProps } from 'vue';
export interface Props {
  size?: 'xs' | 'sm' | 'md'
}

const props = defineProps({
  size: {
    type: String,
    required: true
  }
});


</script>

