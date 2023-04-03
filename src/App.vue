<template lang="pug">
.container.mx-auto.px-4.mt-8
  TheHeader
  div(:class="testclasses.oStack") o-test
  div(:class="testclasses['block__label']") label
  nav nav
  div(:class="[testclasses.oStack,testclasses.oStackXs,testclasses.oStackMd]") o-test--xs
  input(type="checkbox", checked)
  div(:class="oInset.oInset") o-inset
  div(:class="[oInset.oInset, oInset.xs]") o-inset o-inset-xs
  div(:class="[oInset.oInset, oInset.sm]") o-inset o-inset-sm
  div(:class="[oInset.oInset, oInset.lg]") o-inset o-inset-lg
  div(:class="[oInset.oInset, oInset.xl]") o-inset o-inset-xl
  div(:class="[oInset.oInset, oInset.xxl]") o-inset o-inset-xxl

  div(:class="[oInset.oInset, oInset.squish]") o-inset o-inset-squish
  div(:class="[oInset.oInset, oInset.xs, oInset.squish]") o-inset o-inset-xs o-inset-squish
  div(:class="[oInset.oInset, oInset.sm, oInset.squish]") o-inset o-inset-sm o-inset-squish
  div(:class="[oInset.oInset, oInset.lg, oInset.squish]") o-inset o-inset-lg o-inset-squish
  div(:class="[oInset.oInset, oInset.xl, oInset.squish]") o-inset o-inset-xl o-inset-squish
  div(:class="[oInset.oInset, oInset.xxl, oInset.squish]") o-inset o-inset-xxl o-inset-squish

  div(:class="[oInset.oInset, oInset.stretch]") o-inset o-inset-stretch
  div(:class="[oInset.oInset, oInset.xs, oInset.stretch]") o-inset o-inset-xs o-inset-stretch
  div(:class="[oInset.oInset, oInset.sm, oInset.stretch]") o-inset o-inset-sm o-inset-stretch
  div(:class="[oInset.oInset, oInset.lg, oInset.stretch]") o-inset o-inset-lg o-inset-stretch
  div(:class="[oInset.oInset, oInset.xl, oInset.stretch]") o-inset o-inset-xl o-inset-stretch
  div(:class="[oInset.oInset, oInset.xxl, oInset.stretch]") o-inset o-inset-xxl o-inset-stretch

  o-inset hello

  // .class(:class="[testclasses.testclass, testclasses.caterina]") hello
  // div(:class="[testclasses.testclass, testclasses.caterina]") hello
  router-view(v-slot="{ Component }")
    keep-alive
      component(:is="Component")
</template>
<script lang="ts" setup>
import oInset from '@css/objects/o-inset.module.css'
import testclasses from '@css/objects/o-stack.module.css'
import TheHeader from './components/header/TheHeader.vue'
import OInset from "@components/OInset.vue";
</script>

