<template>
  <page-template v-if="currentCategory"
                 :title="pageTitle"
                 :hero-button="saveButton"
                 :img-src="imgSrc"
                 back-button>
    <category-form ref="categoryFormRef"
                   :category-data="currentCategory"
                   @save-form="saveFunction"
                   @name-change="nameChange"
                   @delete-category="deleteCategory"/>
  </page-template>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"
import { computedAsync } from "@vueuse/core"
import { computed, onMounted, ref } from "vue"

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
    await adminStore.updateCategory(categoryData, Number(route.params.categoryId))
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

async function deleteCategory() {
  try {
    await adminStore.deleteCategory(Number(route.params.categoryId))
    notify({
      type: 'success',
      title: 'Categoría eliminada con éxito'
    })
    await router.push({
      name: 'admin-menu'
    })
  } catch (e) {
    console.error('deleteCategory error: ', e)
    notify({
      type: 'error',
      title: 'Ha habido algún error',
      text: 'Por favor, vuelve a intentarlo más tarde'
    })
  }
}

defineOptions({
  inheritAttrs: false
})


const productName = ref('')
function nameChange(newName) {
  productName.value = newName
}

const pageTitle = computed(() => {
  return productName.value || currentCategory.name
})

onMounted(() => productName.value = currentCategory.name)

const imgSrc = computedAsync(() => getUrlPhoto('HlNcigvUi4Q'))

</script>
