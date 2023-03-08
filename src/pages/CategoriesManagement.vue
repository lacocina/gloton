<template lang="pug">
business-form

div
  button(@click="changeName")
    | Change name
  div
    | {{ menuStore.getName }}
div
  button(@click="menuStore.addItem()")
    | add item
  div(
    v-for="item in menuStore.getMenu"
    class="bg-red-600 dark:bg-green-600"
  )
    | {{ item.name }}
</template>

<script setup lang="ts">
import { useMenuStore } from "../store/menu";
import BusinessForm from "../components/admin/BusinessForm.vue";

const menuStore = useMenuStore()
function changeName() {
  menuStore.name = 'Paco'
}
</script>

<style scoped>

</style>
