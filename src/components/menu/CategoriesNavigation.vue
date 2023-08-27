<template>
<div v-if="menuCategories" :class="CategoriesNavigationModule.categoriesNavigation">
    <router-link v-for="category in menuCategories"
                 :key="category.id"
                 :to="{ name: routeName, params: { categoryId: category.id } }"
                 :class="[CategoriesNavigationModule.item, activeClass(category.id)]">
        {{ category.name }}
    </router-link>
</div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUpdated } from "vue"
import type { MenuCategory } from "@types/MenuCategory"
import { useRoute } from "vue-router"
import CategoriesNavigationModule from "@css/components/molecules/categories-navigation.module.css"

const route = useRoute()

interface Props {
  routeName: string
  menuCategories: MenuCategory[]
}

const props = defineProps<Props>()

const pageCategoryId = computed(() : number => Number(route.params.categoryId))

const activeClass = (currentCategory: number) => {
    if (currentCategory === pageCategoryId.value) {
        return CategoriesNavigationModule.active
    }
}

const scrollToActive = () => {
    const element = document.querySelector('.' + CategoriesNavigationModule.active)
    element?.scrollIntoView({ behavior: "smooth" })
}
onMounted(() => scrollToActive())
onUpdated(() => scrollToActive())
</script>
