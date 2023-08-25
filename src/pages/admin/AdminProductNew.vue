<template>
<section :class="[contentPage.contentPage, contentPage.resetTop]">
  <product-header :category-name="categoryName"
                  :product-name="productName"
                  subtitle="Nuevo item"/>
  <category-item-form @name-change="nameChange"
                      @save-form="saveFunction"/>
</section>
<the-footer/>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from "vue"
import {useRoute, useRouter} from "vue-router"

import contentPage from "@css/components/molecules/content-page.module.css"

import ProductHeader from "@components/admin/ProductHeader.vue"
import CategoryItemForm from "@components/admin/ProductForm.vue"
import TheFooter from "@components/layout/TheFooter.vue"

import { useAdminStore } from "@store/backoffice/admin.ts"

const router = useRouter()
const adminStore = useAdminStore()

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
    inheritAttrs: false
})

const productName = ref('')

const categoryName = computed(() : string => {
    const route = useRoute()
    return adminStore.getCategoryById(Number(route.params.categoryId))?.name
})

function nameChange(newName) {
  productName.value = newName
}

function saveFunction() {
  console.log('Producto creado')
  router.back()
}

</script>
