<template>
  <page-template :title="pageTitle" back-button :hero-button="saveButton">
    <category-form ref="categoryFormRef"
                   @save-form="saveFunction"
                   @name-change="nameChange"/>
  </page-template>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue"
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
    const { data } = await adminStore.addCategory(categoryData)
    notify({
      type: 'success',
      title: 'Categoría añadida con éxito'
    })
    await router.push({
      name: 'admin-category-detail',
      params: {
        categoryId: data.id
      }
    })
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

const productName = ref('')
function nameChange(newName) {
  productName.value = newName
}

const pageTitle = computed(() => {
  return productName.value || 'Nueva categoría'
})

defineOptions({
  inheritAttrs: false
})
</script>
