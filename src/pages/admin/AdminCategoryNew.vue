<template>
  <page-template title="Nueva categoría" back-button :hero-button="saveButton">
    <category-form @save-form="saveFunction"/>
  </page-template>
</template>

<script lang="ts" setup>
import PageTemplate from "@components/layout/PageTemplate.vue"
import CategoryForm from "@components/admin/CategoryForm.vue"
import { useAdminStore } from "@store/backoffice/admin.ts";
import { useRouter } from "vue-router"

const router = useRouter()
const adminStore = useAdminStore()

async function saveFunction(categoryData) {
  try {
    await adminStore.addCategory(categoryData)
    router.back()
  } catch (e) {
    console.error('Ha habido un error', e)
  }
}

const saveButton = {
  text: 'Guardar',
  onClick: async () => await saveFunction()
}

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
  inheritAttrs: false
})
</script>
