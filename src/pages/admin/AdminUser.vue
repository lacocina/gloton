<template>
<form class="base-form" :class="oStack.oStack">
  <div :class="baseInput.baseInput">
      <label for="name" :class="baseInput.label">name label</label>
      <input v-model.lazy="formConfig.name" id="name" :class="baseInput.input" type="text" placeholder="-"/>
  </div>
  <div :class="baseInput.baseInput">
      <label for="lastname" :class="baseInput.label">lastname label</label>
      <input v-model.lazy="formConfig.lastname" id="lastname" :class="baseInput.input" type="text" placeholder="-"/>
  </div>
  <div :class="baseInput.baseInput">
      <label for="email" :class="baseInput.label">email label</label>
      <input v-model.lazy="formConfig.email" id="email" :class="baseInput.input" type="text" placeholder="-"/>
  </div>
  <div :class="baseInput.baseInput">
      <label for="phoneNumber" :class="baseInput.label">phoneNumber label</label>
      <input v-model.lazy="formConfig.phoneNumber" id="phoneNumber" :class="baseInput.input" type="text" placeholder="-"/>
  </div>
</form>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { useAdminStore } from "@store/backoffice/admin.ts"
import oStack from '@css/objects/o-stack.module.css'
import baseInput from '@css/components/atoms/base-input.module.css'
import type { User } from "@types/User.ts"

const adminStore = useAdminStore()
const formConfig: User = reactive(adminStore.user)
</script>
