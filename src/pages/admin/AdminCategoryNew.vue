<template>
  <page-template title="Nueva categoría" back-button :hero-button="saveButton">
    <category-form @save-form="saveFunction"/>
  </page-template>
</template>

<script lang="ts" setup>
import PageTemplate from "@components/layout/PageTemplate.vue"
import CategoryForm from "@components/admin/CategoryForm.vue"
import { useRouter } from "vue-router"

const router = useRouter()

function saveFunction() {
  console.log('Guardar')
  router.back()
}

const saveButton = {
  text: 'Guardar',
  onClick: () => saveFunction()
}

// TODO - Que estic fent amb això? Perque fora això me dona error?
defineOptions({
  inheritAttrs: false
})
</script>
