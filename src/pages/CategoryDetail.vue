<template>
    <div v-if="businessStore.loading">
        loading
    </div>
    <div v-else-if="currentCategory">
        <page-template :title="currentCategory.name" :img-src="imgSrc">
            <categories-navigation route-name="category-detail"/>
            <o-stack>
                <menu-item v-for="item in currentCategory.items"
                           :key="item.id"
                           :item="item"/>
            </o-stack>
        </page-template>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"
import { useBusinessStore } from "@store/front/business.ts"
import { computed, onBeforeMount } from "vue"
import PageTemplate from "@components/layout/PageTemplate.vue"
import MenuItem from "@components/menu/MenuItem.vue"
import OStack from "@components/objects/OStack.vue"
import CategoriesNavigation from "@components/menu/CategoriesNavigation.vue"
import { computedAsync } from "@vueuse/core"
import { getUrlPhoto } from "../services/unsplash.ts"

const businessStore = useBusinessStore()
const route = useRoute()
const router = useRouter()

const currentCategory = computed(() => {
  return businessStore.getCategoryById(Number(route.params.categoryId))
})

function handleOnEnter() {
    const categories = businessStore.getMenuCategories
    const categoryHasItems = categories?.some((category) => category.id === Number(route.params.categoryId))
    if (!categoryHasItems) {
        router.push({ path: '/' });
    }
}

onBeforeMount(() => handleOnEnter())

const imgSrc = computedAsync(() => getUrlPhoto('HlNcigvUi4Q'))
</script>
