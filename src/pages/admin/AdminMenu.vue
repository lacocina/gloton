<template>
<o-stack size="xs">
    <h3 :class="txt.title200">Lista de categorías</h3>
    <template v-if="menuCategories">
      <base-card v-for="category in menuCategories"
                 :key="category.id"
                 :img-src="imgSrc"
                 :title="category.name"
                 :items-length="category.items?.length || 0"
                 :href="'/detail/' + category.id"
                 :description="category.description"
                 action-text="Entra para editar"/>
    </template>
    <span v-else>No hay ninguna categoría en la carta en estos momentos</span>
</o-stack>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { computedAsync } from "@vueuse/core";
import { useAdminStore } from "@store/backoffice/admin.ts"
import { getUrlPhoto } from "../../services/unsplash.ts"
import BaseCard from "@components/ui/BaseCard.vue"
import OStack from "@components/objects/OStack.vue"
import txt from "@css/components/atoms/txt.module.css"
import type { MenuCategory } from "@types/MenuCategory.ts"

const adminStore = useAdminStore()
const menuCategories = computed(() : MenuCategory[] | undefined => {
    return adminStore.getMenuCategories
})

const imgSrc = computedAsync(() => getUrlPhoto('nzyzAUsbV0M'))

</script>
