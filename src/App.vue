<template lang="pug">
.container.mx-auto.px-4.mt-8
  TheHeader
  div(:class="testclasses.oStack") o-test
  div(:class="testclasses['block__label']") label
  div(:class="[testclasses.oStack,testclasses.oStackXs,testclasses.oStackMd]") o-test--xs
  input(type="checkbox", checked)
  div(:class="oBoxCss.oBox") o-box
  div(:class="[oBoxCss.oBox, oBoxCss.xs]") o-box o-box-xs
  div(:class="[oBoxCss.oBox, oBoxCss.sm]") o-box o-box-sm

  o-box(size="sm") hello

  // .class(:class="[testclasses.testclass, testclasses.caterina]") hello
  // div(:class="[testclasses.testclass, testclasses.caterina]") hello
  router-view(v-slot="{ Component }")
    keep-alive
      component(:is="Component")
</template>
<script lang="ts" setup>
import oBoxCss from '@css/objects/o-box.module.css'
import testclasses from '@css/objects/o-stack.module.css'
import TheHeader from './components/header/TheHeader.vue'
import OBox from "@components/OBox.vue";
</script>

