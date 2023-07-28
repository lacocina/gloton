<template>
<div>
    <div v-if="adminStore.getUserLoading">Cargando...</div>
    <base-button v-else @click="addUser">Añadir usuario</base-button>
</div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import BaseButton from "@components/ui/BaseButton.vue";
import { useAdminStore } from "@store/backoffice/admin.ts"

const adminStore = useAdminStore()
const router = useRouter()
async function addUser() {
    try {
        await adminStore.fetchUserData()
    } catch (e) {
        console.error(e)
    } finally {
        await router.push({ path: '/admin' });
    }
}
</script>
