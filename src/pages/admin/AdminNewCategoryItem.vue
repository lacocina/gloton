<template>
  <div>AdminNewCategoryItem: {{ categoryId }}</div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import {computed} from "vue";

const categoryId = computed(() => {
  const route = useRoute()
  return route.params?.id
})

</script>
