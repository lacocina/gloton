<template lang="pug">
.container.mx-auto.px-4.mt-8
  TheHeader

  input(type="checkbox", checked)

  .hello hello
  .font-serif-test Nueva categoría
  .hello--variant Configuración

  router-view(v-slot="{ Component }")
    keep-alive
      component(:is="Component")
</template>
<script lang="ts" setup>
import TheHeader from './components/header/TheHeader.vue'
</script>

<style lang="postcss">
@import "@css/settings/custom-media.pcss";
@import "@itcsstools/bem-selectors.pcss";

.hello {

  @mixin btm-modifier variant {
    font-size: 1rem;
    font-style: italic;
  }

  @media (--min-width--md) {
    background-color: yellow;
  }

}

.font-serif-test {
  font-size: 2rem;
  font-family: var(--font-family-serif);
}

.test-color {
  padding: 1rem;
  color: white;
  margin: 0.5rem 0;
  border: 1px solid transparent;
}

</style>
