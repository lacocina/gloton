<template>
    <div v-if="currentItem">
        <category-item-form :item-data="currentItem" :category-name="categoryName"/>
    </div>
</template>

<script lang="ts" setup>
import CategoryItemForm from "@components/admin/CategoryItemForm.vue"
import { useRoute } from "vue-router"
import { computed } from "vue"
import { useAdminStore } from "@store/backoffice/admin.ts"
import type { MenuItem } from "@types/MenuItem.ts"

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

</script>
