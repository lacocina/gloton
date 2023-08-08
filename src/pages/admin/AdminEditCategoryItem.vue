<template>
<category-item-form/>
</template>

<script lang="ts" setup>
import CategoryItemForm from "@components/admin/CategoryItemForm.vue"

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
    inheritAttrs: false
})
</script>
