<template>
<section v-if="currentItem" :class="[contentPage.contentPage, contentPage.resetTop]">
  <product-header :category-name="categoryName" :product-name="productName" subtitle="Editar item"/>
  <category-item-form :product-data="currentItem"
                      @save-form="saveFunction"
                      @name-change="nameChange"/>
</section>
<the-footer/>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"
import {computed, ref} from "vue"

import contentPage from "@css/components/molecules/content-page.module.css"

import ProductHeader from "@components/admin/ProductHeader.vue"
import CategoryItemForm from "@components/admin/ProductForm.vue"
import TheFooter from "@components/layout/TheFooter.vue"

import { useAdminStore } from "@store/backoffice/admin.ts"
import type { MenuItem } from "@types/MenuItem.ts"

const router = useRouter()
const adminStore = useAdminStore()

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
    inheritAttrs: false
})

const categoryName = computed(() : string => {
    const route = useRoute()
    return adminStore.getCategoryById(Number(route.params.categoryId))?.name
})

const currentItem = computed(() : MenuItem | undefined  => {
    const route = useRoute()
    const category = adminStore.getCategoryItemById(Number(route.params.categoryId), Number(route.params.itemId))

    return category.items?.find((item) => item.id === Number(route.params.itemId))
})

const productName = ref('')
function nameChange(newName) {
  productName.value = newName
}

function saveFunction() {
  console.log('Producto editado')
  router.back()
}

</script>
