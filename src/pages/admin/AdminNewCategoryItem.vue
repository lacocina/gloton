<template>
<category-item-form></category-item-form>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import { computed } from "vue"
import CategoryItemForm from "@components/admin/CategoryItemForm.vue"

const categoryId = computed(() => {
  const route = useRoute()
  return route.params?.categoryId
})

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
    inheritAttrs: false
})

</script>
