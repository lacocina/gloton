<template lang="pug">
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

<script setup>
import { useMenuStore } from "../store/menu";

const menuStore = useMenuStore()
function changeName() {
  menuStore.name = 'Paco'
}
</script>

<style scoped>

</style>
