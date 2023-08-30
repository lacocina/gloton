<template>
  <page-template title="Nueva categoría" back-button :hero-button="saveButton">
    <category-form ref="categoryFormRef" @save-form="saveFunction"/>
  </page-template>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import PageTemplate from "@components/layout/PageTemplate.vue"
import CategoryForm from "@components/admin/CategoryForm.vue"
import { useAdminStore } from "@store/backoffice/admin.ts"

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

const categoryFormRef = ref(null)

const saveButton = {
  text: 'Guardar',
  onClick: () => categoryFormRef.value.saveForm()
}

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
  inheritAttrs: false
})
</script>
