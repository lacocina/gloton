<template>
<div v-if="adminStore.getUserLoading">Cargando...</div>
<form v-else class="base-form" :class="oStack.oStack">
    <div :class="BaseInputModule.baseInput">
        <label for="name" :class="BaseInputModule.label">email label</label>
        <input v-model.lazy="formConfig.email" id="email" :class="BaseInputModule.input" type="text" placeholder="-"/>
    </div>
    <div :class="BaseInputModule.baseInput">
        <label for="lastname" :class="BaseInputModule.label">pass label</label>
        <input v-model.lazy="formConfig.pass" id="pass" :class="BaseInputModule.input" type="password"/>
    </div>
    <base-button @click="addUser">Añadir usuario</base-button>
</form>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import BaseButton from "@components/ui/BaseButton.vue";
import oStack from '@css/objects/o-stack.module.css'
import BaseInputModule from '@css/components/atoms/base-input.module.css'
import { useAdminStore } from "@store/backoffice/admin.ts"
import { reactive } from "vue";

const adminStore = useAdminStore()
const router = useRouter()
async function addUser() {
    try {
        await adminStore.fetchUserData()
    } catch (e) {
        console.error(e)
    } finally {
        // TODO - Ir a la página privada que ha intentado entrar
        // console.log(route.params?.toPath || 'No tiene')
        await router.push({ path: '/admin' });
    }
}

const formConfig = reactive({
    email: null,
    pass: null
})

</script>
