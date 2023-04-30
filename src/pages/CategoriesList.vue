<template>
  <template v-if="businessStore.loading">
      Loading
  </template>
  <template v-else>
    <page-template :title="businessName">
        <o-stack size="xs">
            <h3 :class="txt.title200">Nuestra carta</h3>
            <template v-if="menuCategories">
              <base-card v-for="category in menuCategories"
                         :key="category.id"
                         :href="'/detail/'+ category.id"
                         :img-src="imgSrc"
                         :title="category.name"
                         :description="category.description"
                         action-text="Ver todas las opciones"
              />
            </template>
            <span v-else>No hay ninguna categoría visible en la carta en estos momentos</span>
        </o-stack>
    </page-template>
  </template>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useBusinessStore } from "@store/business"
import PageTemplate from "@components/layout/PageTemplate.vue"
import BaseCard from "@components/ui/BaseCard.vue"
import OStack from "@components/objects/OStack.vue"
import txt from "@css/components/atoms/txt.module.css"
import { getUrlPhoto } from "../services/unsplash";
import { MenuCategory } from "../types/MenuCategory";

const businessStore = useBusinessStore()

const businessName = computed(() : string => {
    return businessStore.business?.name ?? ''
})

const menuCategories = computed(() : MenuCategory[] | undefined => {
    return businessStore.getMenuCategories
})

const imgSrc = ref<String>('')
async function getImage() {
    imgSrc.value = await getUrlPhoto('nzyzAUsbV0M');
}

getImage();
</script>
