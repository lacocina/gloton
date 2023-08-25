<template>
  <page-template title="Editar categoría" back-button :hero-button="heroButton">
    <div>
      AdminCategoryEdit
    </div>
  </page-template>
</template>

<script lang="ts" setup>
import PageTemplate from "@components/layout/PageTemplate.vue"
import { useRouter } from "vue-router"

const router = useRouter()

const heroButton = {
  text: 'Guardar',
  onClick: () => {
    console.log('Guardar')
    router.back()
  }
}

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
  inheritAttrs: false
})
</script>
