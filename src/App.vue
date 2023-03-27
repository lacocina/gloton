<template lang="pug">
.container.mx-auto.px-4.mt-8
  TheHeader
  .hello hello
  .hello--variant hello variant

  .test-color.font-brand-primary-100 font-brand-primary-100
  .test-color.bdc-brand-primary-100 bdc-brand-primary-100
  .test-color.bgc-brand-primary-100 bgc-brand-primary-100

  .test-color.font-brand-primary-200 font-brand-primary-200
  .test-color.bdc-brand-primary-200 bdc-brand-primary-200
  .test-color.bgc-brand-primary-200 bgc-brand-primary-200

  .test-color.font-brand-primary-400 font-brand-primary-400
  .test-color.bdc-brand-primary-400 bdc-brand-primary-400
  .test-color.bgc-brand-primary-400 bgc-brand-primary-400

  .test-color.font-brand-primary-500 font-brand-primary-500
  .test-color.bdc-brand-primary-500 bdc-brand-primary-500
  .test-color.bgc-brand-primary-500 bgc-brand-primary-500

  .test-color.font-brand-primary-600 font-brand-primary-600
  .test-color.bdc-brand-primary-600 bdc-brand-primary-600
  .test-color.bgc-brand-primary-600 bgc-brand-primary-600


  .test-color.font-brand-primary font-brand-primary
  .test-color.font-brand-primary.color-luminosity-600 font-brand-primary + color-luminosity-600


  router-view(v-slot="{ Component }")
    keep-alive
      component(:is="Component")
</template>
<script lang="ts" setup>
import TheHeader from './components/header/TheHeader.vue'
</script>

<style lang="postcss">
@import "@itcsssettings/breakpoints.pcss";
@import "@itcsstools/bem-selectors.pcss";

.hello {

  @mixin btm-modifier variant {
    background-color: var(--cta-bg);
    font-size: 30px;
  }

  @media (--s-bp-min-width--xs) {
    background-color: green;
  }

}

.test-color {
  padding: 1rem;
  color: white;
  margin: 0.5rem 0;
  border: 1px solid transparent;
}

</style>
