<template lang="pug">
.container.mx-auto.px-4.mt-8
  TheHeader

  .hello hello

  div(:class="txt.hero400") txt hero400
  div(:class="txt.title300") txt title300
  div(:class="txt.title200") txt title200
  div(:class="txt.subtitle200") txt subtitle200
  div(:class="txt.subtitle100") txt subtitle100
  div(:class="txt.label") txt label

  o-inset o-inset
  o-inset(size="xs") o-inset + xs
  o-inset(size="lg", modifier="stretch") o-inset + lg + stretch
  o-inset(size="lg", modifier="squish") o-inset + lg + squish
  o-inset(size="xl", modifier="section") o-inset + xl + section

  o-stack(size="xl")
    o-stack
      div o-stack item
      div o-stack item
      div o-stack item
    o-stack(size="sm")
      div o-stack item
      div o-stack item
      div o-stack item

  router-view(v-slot="{ Component }")
    keep-alive
      component(:is="Component")
</template>
<script lang="ts" setup>
import TheHeader from './components/header/TheHeader.vue'
import OInset from "@components/objects/OInset.vue";
import OStack from "@components/objects/OStack.vue";
import txt from "@css/components/atoms/txt.module.css"
</script>
