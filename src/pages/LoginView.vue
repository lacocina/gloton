<template>
<page-template title="Login" :img-src="imgSrc">
    <div v-if="adminStore.userLoading">Cargando...</div>
    <form @submit.prevent="login" v-else class="base-form" :class="oStack.oStack">
        <div :class="BaseInputModule.baseInput">
            <label for="name" :class="BaseInputModule.label">email label*</label>
            <input v-model.lazy="formConfig.email.value"
                   id="email"
                   :class="[
                       BaseInputModule.input,
                       formConfig.email.error ? BaseInputModule.error : ''
                   ]"
                   type="text"
                   placeholder="-"/>
            <p v-if="formConfig.email.error" :class="BaseInputModule.errorMessage">
              *Este campo no puede estar vacío
            </p>
        </div>
        <div :class="BaseInputModule.baseInput">
            <label for="lastname" :class="BaseInputModule.label">pass label*</label>
            <input v-model.lazy="formConfig.pass.value"
                   id="pass"
                   :class="[
                       BaseInputModule.input,
                       formConfig.pass.error ? BaseInputModule.error : ''
                   ]"
                   type="password"
                   autocomplete/>
            <p v-if="formConfig.pass.error" :class="BaseInputModule.errorMessage">
              *Este campo no puede estar vacío
            </p>
        </div>
        <base-button button-type="submit">Login</base-button>
    </form>
</page-template>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import BaseButton from "@components/ui/BaseButton.vue"
import oStack from '@css/objects/o-stack.module.css'
import BaseInputModule from '@css/components/atoms/base-input.module.css'
import {InternalServerError, useAdminStore} from "@store/backoffice/admin.ts"
import { reactive } from "vue";
import PageTemplate from "@components/layout/PageTemplate.vue";
import {computedAsync} from "@vueuse/core";
import {getUrlPhoto} from "../services/unsplash.ts";

const adminStore = useAdminStore()
const router = useRouter()

const formConfig = reactive({
  email: {
    value: null,
    error: false
  },
  pass: {
    value: null,
    error: false
  },
})

async function login() {
  if (validateForm()) {
    try {
      await adminStore.login({
        email: formConfig.email.value,
        pass: formConfig.pass.value
      })
      await router.push({ path: '/admin' })
    } catch (e) {
      if (e instanceof InternalServerError) {
        console.log('InternalServerError')
      }
    }
  }
}

function validateForm() {
  if (formConfig.email.value && formConfig.pass.value) return true

  if (!formConfig.email.value) formConfig.email.error = true
  if (!formConfig.pass.value) formConfig.pass.error = true

  return false
}

const imgSrc = computedAsync(() => getUrlPhoto('1pJLkDYasfY'))
</script>
