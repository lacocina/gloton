<template>
<category-item-form :category-name="categoryName"/>
</template>

<script lang="ts" setup>
import CategoryItemForm from "@components/admin/CategoryItemForm.vue"
import { computed } from "vue";
import { useRoute } from "vue-router";
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
