<template>
<section :class="[contentPage.contentPage, contentPage.resetTop]">
  <product-header :category-name="categoryName" :product-name="productName" subtitle="Nuevo item"/>
  <category-item-form @name-change="nameChange"
                      @save-form="saveFunction"/>
</section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

import contentPage from "@css/components/molecules/content-page.module.css"

import ProductHeader from "@components/admin/ProductHeader.vue"
import CategoryItemForm from "@components/admin/ProductForm.vue"

import { useAdminStore } from "@store/backoffice/admin.ts"
import { useNotification } from "@kyvg/vue3-notification"

const route = useRoute()
const router = useRouter()
const adminStore = useAdminStore()
const { notify } = useNotification()

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
    inheritAttrs: false
})

const productName = ref('')

const categoryName = adminStore.getCategoryName(Number(route.params.categoryId))

function nameChange(newName) {
  productName.value = newName
}

async function saveFunction(productData) {
  console.log('save')
  try {
    await adminStore.addProduct(productData, Number(route.params.categoryId))
    notify({
      type: 'success',
      title: 'Producto añadido con éxito'
    })
    router.back()
  } catch (e) {
    console.error('addProduct error: ', e)
    notify({
      type: 'error',
      title: 'Ha habido algún error',
      text: 'Por favor, vuelve a intentarlo más tarde'
    })
  }
}

</script>
