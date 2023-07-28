<template>
<business-form>
<div>
  <button @click="changeName">
    Change name
  </button>
  <div>
    {{ menuStore.getName }}
  </div>
</div>
<div>
  <button @click="menuStore.addItem()">
      add item
  </button>
  <div v-for="item in menuStore.getMenu">
    {{ item.name }}
  </div>
</div>
</business-form>

</template>

<script setup lang="ts">
import { useMenuStore } from "@store/front/menu.ts";
import BusinessForm from "../components/admin/BusinessForm.vue";

const menuStore = useMenuStore()
function changeName() {
  menuStore.name = 'Paco'
}
</script>

<style scoped>

</style>
