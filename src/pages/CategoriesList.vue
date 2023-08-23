<template>
  <template v-if="businessStore.loading">
      Loading
  </template>
  <template v-else>
<!--    <vue3-lottie :animationLink="loadingJSON" :height="200" :width="200" />-->
    <page-template :title="businessName" :img-src="imgSrc">
        <o-stack size="xs">
            <h3 :class="txt.title200">Nuestra carta</h3>
            <template v-if="menuCategories">
              <base-card v-for="category in menuCategories"
                         :key="category.id"
                         :href="'/detail/'+ category.id"
                         :img-src="categoryImgSrc"
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
import { computed } from "vue";
import { computedAsync } from "@vueuse/core"
import { useBusinessStore } from "@store/front/business.ts"
import type { MenuCategory } from "../types/MenuCategory";
import { getUrlPhoto } from "../services/unsplash";
import PageTemplate from "@components/layout/PageTemplate.vue"
import BaseCard from "@components/ui/BaseCard.vue"
import OStack from "@components/objects/OStack.vue"
import txt from "@css/components/atoms/txt.module.css"

// TODO - Lottie
// import Vue3Lottie from "vue3-lottie";
// import loadingJSON from "@assets/lottie-animations/loading.json"

const businessStore = useBusinessStore()

const businessName = computed(() : string => {
    return businessStore.business?.name ?? ''
})

const menuCategories = computed(() : MenuCategory[] | undefined => {
    return businessStore.getMenuCategories
})

const categoryImgSrc = computedAsync(() => getUrlPhoto('nzyzAUsbV0M'))
const imgSrc = computedAsync(() => getUrlPhoto('HlNcigvUi4Q'))

</script>
