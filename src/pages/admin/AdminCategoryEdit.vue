<template>
  <page-template v-if="currentCategory"
                 :title="currentCategory.name"
                 :hero-button="saveButton"
                 :img-src="imgSrc"
                 back-button>
    <category-form :category-data="currentCategory" @save-form="saveFunction"/>
  </page-template>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"
import { computedAsync } from "@vueuse/core"
import { computed } from "vue"

import PageTemplate from "@components/layout/PageTemplate.vue"
import CategoryForm from "@components/admin/CategoryForm.vue"
import { useAdminStore } from "@store/backoffice/admin.ts"
import type { MenuCategory } from "@types/MenuCategory.ts"
import { getUrlPhoto } from "../../services/unsplash.ts"

const router = useRouter()
const adminStore = useAdminStore()

const currentCategory = computed(() : MenuCategory | undefined  => {
  const route = useRoute()
  return adminStore.getCategoryById(Number(route.params.categoryId))
})

function saveFunction() {
  console.log('Categoría editada')
  router.back()
}

const saveButton = {
  text: 'Guardar',
  onClick: () => saveFunction()
}

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
  inheritAttrs: false
})

const imgSrc = computedAsync(() => getUrlPhoto('HlNcigvUi4Q'))

</script>
