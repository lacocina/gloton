<template>
<page-template v-if="currentCategory" :title="currentCategory.name" back-button>
    <o-stack size="lg">
        <base-alert v-if="!currentCategory.items?.length" small>
            Esta categoría no aparecerá en la página porque aún no tiene ningún elemento
        </base-alert>
        <o-stack v-if="currentCategory.description">
            <h3 :class="txt.title200">Descripción</h3>
            <p>{{ currentCategory.description }}</p>
        </o-stack>
    </o-stack>
</page-template>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useAdminStore } from "@store/backoffice/admin.ts"
import { useRoute } from "vue-router"
import type { MenuCategory } from "@types/MenuCategory.ts"
import PageTemplate from "@components/layout/PageTemplate.vue"
import OStack from "@components/objects/OStack.vue"
import txt from "@css/components/atoms/txt.module.css"
import BaseAlert from "@components/ui/BaseAlert.vue";

const adminStore = useAdminStore()
const route = useRoute()

const currentCategory = computed(() : MenuCategory | undefined => {
    return adminStore.getCategoryById(Number(route.params.id))
})

</script>
