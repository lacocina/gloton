<template lang="pug">
.container.mx-auto.px-4.mt-8
  TheHeader
  div(:class="testclasses.oTest") o-test
  div(:class="[testclasses.oTest,testclasses.oTestXs,testclasses.oTestMd]") o-test--xs
  input(type="checkbox", checked)
  .class(:class="[testclasses.testclass, testclasses.caterina]") hello
  div(:class="[testclasses.testclass, testclasses.caterina]") hello
  router-view(v-slot="{ Component }")
    keep-alive
      component(:is="Component")
</template>
<script lang="ts" setup>
// import styles from "@css/components/atoms/_index.scss";
import testclasses from '@css/components/atoms/_indexx.module.scss'
import TheHeader from './components/header/TheHeader.vue'
</script>

