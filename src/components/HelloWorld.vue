<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
    }
  },
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <p class="read-the-docs read-the-docs--brand">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped lang="scss">
@use "src/scss/tools/bem-generator" as t-bem;

.read-the-docs {
  color: var(--s-color-brand--primary);

  @include t-bem.modifier(brand) {
    color: #42b983;
  }
}
</style>
