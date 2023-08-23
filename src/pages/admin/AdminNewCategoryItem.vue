<template>
<section :class="[contentPage.contentPage, contentPage.resetTop]">
  <product-header/>
  <category-item-form :category-name="categoryName"/>
</section>
<the-footer/>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

import contentPage from "@css/components/molecules/content-page.module.css"

import ProductHeader from "@components/admin/ProductHeader.vue"
import CategoryItemForm from "@components/admin/CategoryItemForm.vue"
import TheFooter from "@components/layout/TheFooter.vue"

import { useAdminStore } from "@store/backoffice/admin.ts"

const adminStore = useAdminStore()

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
    inheritAttrs: false
})

const categoryName = computed(() : string => {
    const route = useRoute()
    return adminStore.getCategoryById(Number(route.params.categoryId))?.name
})

</script>
