<template>
<form class="base-form" :class="oStack.oStack">
  <div :class="BaseInputModule.baseInput">
      <label for="name" :class="BaseInputModule.label">name label</label>
      <input v-model.lazy="formConfig.name" id="name" :class="BaseInputModule.input" type="text" placeholder="-"/>
  </div>
  <div :class="BaseInputModule.baseInput">
      <label for="lastname" :class="BaseInputModule.label">lastname label</label>
      <input v-model.lazy="formConfig.lastname" id="lastname" :class="BaseInputModule.input" type="text" placeholder="-"/>
  </div>
  <div :class="BaseInputModule.baseInput">
      <label for="email" :class="BaseInputModule.label">email label</label>
      <input v-model.lazy="formConfig.email" id="email" :class="BaseInputModule.input" type="text" placeholder="-"/>
  </div>
  <div :class="BaseInputModule.baseInput">
      <label for="phoneNumber" :class="BaseInputModule.label">phoneNumber label</label>
      <input v-model.lazy="formConfig.phoneNumber" id="phoneNumber" :class="BaseInputModule.input" type="text" placeholder="-"/>
  </div>
</form>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { useAdminStore } from "@store/backoffice/admin.ts"
import oStack from '@css/objects/o-stack.module.css'
import BaseInputModule from '@css/components/atoms/base-input.module.css'
import type { User } from "@types/User.ts"

const adminStore = useAdminStore()
const formConfig: User = reactive(adminStore.getUser)
</script>
