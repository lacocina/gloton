<template>
  <div>
    <page-template title="Nueva categoría" back-button :hero-button="heroButton">
      <div>
        AdminNewCategory
      </div>
    </page-template>
  </div>
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
</script>
