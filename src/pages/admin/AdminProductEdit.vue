<template>
<section v-if="currentProduct" :class="[contentPage.contentPage, contentPage.resetTop]">
  <product-header :category-name="categoryName" :product-name="productName" subtitle="Editar producto"/>
  <category-item-form :product-data="currentProduct"
                      @save-form="saveFunction"
                      @name-change="nameChange"/>
</section>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"
import {computed, ref} from "vue"

import contentPage from "@css/components/molecules/content-page.module.css"

import ProductHeader from "@components/admin/ProductHeader.vue"
import CategoryItemForm from "@components/admin/ProductForm.vue"

import { useAdminStore } from "@store/backoffice/admin.ts"
import type { MenuItem } from "@types/MenuItem.ts"

const route = useRoute()
const router = useRouter()
const adminStore = useAdminStore()

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
    inheritAttrs: false
})

const categoryName = adminStore.getCategoryName(Number(route.params.categoryId))

const currentProduct : MenuItem = adminStore.getProductById(Number(route.params.categoryId), Number(route.params.itemId))

const productName = ref('')

function nameChange(newName) {
  productName.value = newName
}

function saveFunction() {
  console.log('Producto editado')
  router.back()
}

</script>
