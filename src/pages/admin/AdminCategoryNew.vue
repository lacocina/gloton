<template>
  <page-template title="Nueva categoría" back-button :hero-button="saveButton">
    <category-form ref="categoryFormRef" @save-form="saveFunction"/>
  </page-template>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useAdminStore } from "@store/backoffice/admin.ts"
import { useNotification } from '@kyvg/vue3-notification'
import PageTemplate from "@components/layout/PageTemplate.vue"
import CategoryForm from "@components/admin/CategoryForm.vue"

const { notify } = useNotification()
const router = useRouter()
const adminStore = useAdminStore()

async function saveFunction(categoryData) {
  try {
    await adminStore.addCategory(categoryData)
    notify({
      type: 'success',
      title: 'Categoría añadida con éxito'
    })
    router.back()
  } catch (e) {
    console.error('addCategory error: ', e)
    notify({
      type: 'error',
      title: 'Ha habido algún error',
      text: 'Por favor, vuelve a intentarlo más tarde'
    })
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
