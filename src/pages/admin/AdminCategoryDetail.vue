<template>
<page-template v-if="currentCategory" :title="currentCategory.name" back-button>
    <o-stack size="xl">
        <base-alert v-if="!currentCategory.items?.length" small>
            Esta categoría no aparecerá en la página porque aún no tiene ningún elemento
        </base-alert>
        <o-stack v-if="currentCategory.description">
            <h3 :class="txt.title200">Descripción</h3>
            <p>{{ currentCategory.description }}</p>
        </o-stack>
        <o-stack>
            <div :class="[oFlexModule.oFlex, oFlexModule.betweenCenter]">
                <h3 :class="txt.title200">
                    {{ $t('admin.cards.productsNumber', { number: currentCategory.items?.length || 0 }) }}
                </h3>
                <div v-if="currentCategory.items">Ordenar</div>
            </div>
            <div v-if="currentCategory.items">
                <menu-item v-for="item in currentCategory.items"
                           :key="item.id"
                           :item="item"/>
            </div>
            <add-item route-name="admin-new-category-item"
                      :params="{ categoryId: Number($route.params.id)}">
                Añadir item
            </add-item>
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
import BaseAlert from "@components/ui/BaseAlert.vue"
import oFlexModule from "@css/objects/o-flex.module.css"
import MenuItem from "@components/admin/MenuItem.vue"
import AddItem from "@components/admin/AddItem.vue";

const adminStore = useAdminStore()
const route = useRoute()

const currentCategory = computed(() : MenuCategory | undefined => {
    return adminStore.getCategoryById(Number(route.params.categoryId))
})

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
    inheritAttrs: false
})

</script>
