<template>
    <div v-if="businessStore.loading">
        loading
    </div>
    <div v-else-if="currentCategory">
        <page-template :title="currentCategory.name">
            <categories-navigation></categories-navigation>
            <o-stack>
                <menu-item v-for="item in currentCategory.items" :item="item"/>
            </o-stack>
        </page-template>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import { useBusinessStore } from "@store/business"
import { computed } from "vue";
import PageTemplate from "@components/layout/PageTemplate.vue";
import MenuItem from "@components/menu/MenuItem.vue";
import OStack from "@components/objects/OStack.vue";
import CategoriesNavigation from "@components/menu/CategoriesNavigation.vue";

const businessStore = useBusinessStore()

const route = useRoute()
const currentCategory = computed(() => {
  return businessStore.getCategoryById(Number(route.params.categoryId))
})

</script>
