<template>
<div>
    <base-button @click="addUser">Añadir usuario</base-button>
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
        await adminStore.fetchUserData()
        await router.push({
            name: 'admin-home'
        })
    } catch (e) {
        console.error(e)
    }
}
</script>
