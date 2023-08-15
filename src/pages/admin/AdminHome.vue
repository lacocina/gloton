<template>
<o-stack size="xs">
    <base-card title="Usuario"
               href="/admin/user"
               description="Gestión de datos de usuario"
               :show-img="false"
               left-icon="account_circle"
               right-arrow/>
    <base-card title="Restaurante"
               href="/admin/business"
               description="Editar datos del local"
               :show-img="false"
               left-icon="store"
               right-arrow/>
    <base-card title="Menu"
               href="/admin/menu"
               description="Oferta gastronómica"
               :show-img="false"
               left-icon="content_paste"
               right-arrow/>
    <base-card title="Configuración"
               href="/admin/general-settings"
               description="Editar estilos globales"
               :show-img="false"
               left-icon="settings"
               right-arrow/>
</o-stack>
</template>

<script lang="ts" setup>
import OStack from "@components/objects/OStack.vue"
import BaseCard from "@components/ui/BaseCard.vue"
</script>

<style scoped>

</style>
