<template>
<section v-if="currentProduct" :class="[contentPage.contentPage, contentPage.resetTop]">
  <product-header :category-name="categoryName"
                  :product-name="pageTitle"
                  subtitle="Editar producto"/>
  <category-item-form :product-data="currentProduct"
                      @save-form="saveProduct"
                      @delete-product="deleteProduct"
                      @name-change="nameChange"/>
</section>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"
import {computed, onMounted, ref} from "vue"

import contentPage from "@css/components/molecules/content-page.module.css"

import ProductHeader from "@components/admin/ProductHeader.vue"
import CategoryItemForm from "@components/admin/ProductForm.vue"

import { useAdminStore } from "@store/backoffice/admin.ts"
import type { MenuItem } from "@types/MenuItem.ts"
import { useNotification } from "@kyvg/vue3-notification";

const route = useRoute()
const router = useRouter()
const adminStore = useAdminStore()
const { notify } = useNotification()

defineOptions({
    inheritAttrs: false
})

const categoryName = adminStore.getCategoryName(Number(route.params.categoryId))

const currentProduct : MenuItem = adminStore.getProductById(Number(route.params.categoryId), Number(route.params.itemId))

const productName = ref('')

function nameChange(newName) {
  productName.value = newName
}

const pageTitle = computed(() => {
  return productName.value || currentProduct.name
})

onMounted(() => productName.value = currentProduct.name)

function goBack() {
  router.push({
    name: 'admin-category-detail',
    params: {
      categoryId: Number(route.params.categoryId)
    }
  })
}

async function saveProduct(productData) {
  try {
    await adminStore.updateProduct(
        productData,
        Number(route.params.itemId),
        Number(route.params.categoryId)
    )
    notify({
      type: 'success',
      title: 'Producto editado con éxito'
    })
    goBack()
  } catch (e) {
    console.error('updateProduct error: ', e)
    notify({
      type: 'error',
      title: 'Ha habido algún error',
      text: 'Por favor, vuelve a intentarlo más tarde'
    })
  }
}

async function deleteProduct() {
  await console.log('deleteProduct')
  goBack()
}

</script>
