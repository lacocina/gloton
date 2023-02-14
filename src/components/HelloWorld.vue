<template>
  <h1>{{ msg }}</h1>

  <div class="card m-5 text-2xl bg-green-500">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p class="icon is-twitter">
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>

  <label>
    <input type="checkbox" class="accent-pink-500" checked> Customized
  </label>

  <select>
    <option>Yes</option>
    <option>No</option>
    <option>Maybe</option>
  </select>

  <select class="appearance-none">
    <option>Yes</option>
    <option>No</option>
    <option>Maybe</option>
  </select>

  <p class="bg-primary">primary</p>
  <p class="hover:bg-primary">hover:primary</p>
  <p class="bg-blue">blue</p>
  <p class="hover:bg-blue transition-colors duration-700">hover:blue</p>
  <p class="bg-blue-50">blue 50</p>
  <p class="bg-blue-100">blue100</p>
  <p class="bg-blue-200">blue200</p>
  <p class="bg-blue-300">blue300</p>
  <p class="bg-blue-400">blue400</p>
  <p class="bg-blue-500">blue500</p>
  <p class="bg-blue-600">blue600</p>
  <p class="bg-blue-700">blue700</p>
  <p class="bg-blue-800">blue800</p>
  <p class="bg-blue-900">blue900</p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <p class="read-the-docs read-the-docs--brand">Click on the Vite and Vue logos to learn more</p>
</template>

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

<style scoped>

.read-the-docs {
  color: red;
}
</style>
