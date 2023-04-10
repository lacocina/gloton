<template lang="pug">
div(:class="OPageModule.oPage")
  o-inset(size="xs", modifier="section")
    TheHeader
  section(:class="OPageModule.content")
    router-view(v-slot="{ Component }")
      keep-alive
        component(:is="Component")
</template>
<script lang="ts" setup>
import TheHeader from './components/header/TheHeader.vue'
import OPageModule from "@css/objects/o-page.module.css"
import OInset from "@components/objects/OInset.vue";

</script>
