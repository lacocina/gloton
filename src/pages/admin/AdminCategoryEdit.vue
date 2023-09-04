<template>
  <page-template v-if="currentCategory"
                 :title="currentCategory.name"
                 :hero-button="saveButton"
                 :img-src="imgSrc"
                 back-button>
    <category-form ref="categoryFormRef"
                   :category-data="currentCategory"
                   @save-form="saveFunction"
                   @delete-category="deleteCategory"/>
  </page-template>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"
import { computedAsync } from "@vueuse/core"
import { computed, ref } from "vue"

import PageTemplate from "@components/layout/PageTemplate.vue"
import CategoryForm from "@components/admin/CategoryForm.vue"
import { useAdminStore } from "@store/backoffice/admin.ts"
import type { MenuCategory } from "@types/MenuCategory.ts"
import { getUrlPhoto } from "../../services/unsplash.ts"
import { useNotification } from "@kyvg/vue3-notification"

const route = useRoute()
const router = useRouter()
const adminStore = useAdminStore()
const { notify } = useNotification()

const currentCategory : MenuCategory = adminStore.getCategoryById(Number(route.params.categoryId))

async function saveFunction(categoryData) {
  try {
    await adminStore.updateCategory({
      ...categoryData,
      id: Number(route.params.categoryId)
    })
    notify({
      type: 'success',
      title: 'Categoría editada con éxito'
    })
    router.back()
  } catch (e) {
    console.error('updateCategory error: ', e)
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

function deleteCategory() {
  console.log('deleteCategory')
}

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
  inheritAttrs: false
})

const imgSrc = computedAsync(() => getUrlPhoto('HlNcigvUi4Q'))

</script>
