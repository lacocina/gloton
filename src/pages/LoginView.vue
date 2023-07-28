<template>
<div>
    <div v-if="adminStore.getUserLoading">Cargando...</div>
    <base-button v-else @click="addUser">Añadir usuario</base-button>
    <base-button @click="goToAdmin">ves a admin</base-button>
</div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import BaseButton from "@components/ui/BaseButton.vue";
import { useAdminStore } from "@store/admin.ts"

const adminStore = useAdminStore()
const router = useRouter()
async function addUser() {
    try {
        await adminStore.fetchUserData().then(() => {
            goToAdmin()
        })
    } catch (e) {
        console.error(e)
    }
}

function goToAdmin() {
    router.push({ path: '/admin' });
}

</script>
