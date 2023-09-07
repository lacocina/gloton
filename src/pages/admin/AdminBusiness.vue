<template>
    <base-dialog @confirm="updateData"
                 ref="changeNameDialog"
                 title="Cambio de datos"
                 text="Estás a punto de cambiar los datos públicos de tu negocio ¿Estás seguro?"/>
    <form @submit.prevent="$refs.changeNameDialog.open()" class="base-form" :class="oStack.oStack">
        <div :class="baseInput.baseInput">
          <label for="name" :class="baseInput.label">name label</label>
          <input v-model.lazy="formConfig.name"
                 @blur="validateName"
                 id="name"
                 :class="[
                     baseInput.input,
                     nameError ? baseInput.error : ''
                 ]"
                 type="text"
                 placeholder="-"/>
          <p v-if="nameError" :class="baseInput.errorMessage">
            *Este campo no puede estar vacío
          </p>
        </div>
        <div :class="baseInput.baseInput">
          <label for="email" :class="baseInput.label">email label</label>
          <input v-model.lazy="formConfig.email"
                 @blur="validateEmail"
                 id="email"
                 :class="[
                     baseInput.input,
                     emailError ? baseInput.error : ''
                 ]"
                 type="text"
                 placeholder="-"/>
          <p v-if="emailError" :class="baseInput.errorMessage">
            *Este campo no puede estar vacío
          </p>
        </div>
        <div :class="baseInput.baseInput">
          <label for="phoneNumber" :class="baseInput.label">phoneNumber label</label>
          <input v-model.lazy="formConfig.phoneNumber"
                 @blur="validatePhoneNumber"
                 id="phoneNumber"
                 :class="[
                       baseInput.input,
                       phoneNumberError ? baseInput.error : ''
                   ]"
                 type="text"
                 placeholder="-"/>
          <p v-if="phoneNumberError" :class="baseInput.errorMessage">
            *Este campo no puede estar vacío
          </p>
        </div>
        <div :class="[oFlex.endCenter, uGap.md]">
          <base-button button-style="secondary" @click="cancel">Cancelar</base-button>
          <base-button button-type="submit">Guardar</base-button>
        </div>
    </form>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue"
import { useAdminStore } from "@store/backoffice/admin.ts"
import oStack from '@css/objects/o-stack.module.css'
import baseInput from '@css/components/atoms/base-input.module.css'
import type { BusinessForm } from "@types/BusinessForm.ts"
import oFlex from "@css/objects/o-flex.module.css"
import uGap from "@css/utilities/u-gap.module.css"
import BaseButton from "@components/ui/BaseButton.vue"
import { useNotification } from "@kyvg/vue3-notification"
import { useRouter } from "vue-router"
import BaseDialog from "@components/ui/BaseDialog.vue"

const adminStore = useAdminStore()
const { notify } = useNotification()
const router = useRouter()

const formConfig = reactive<BusinessForm>({
  name: '',
  email: '',
  phoneNumber: ''
})

onMounted(() => {
  formConfig.name = adminStore.business.name
  formConfig.email = adminStore.business.email
  formConfig.phoneNumber = adminStore.business.phoneNumber
})

const nameError = ref(false)
const emailError = ref(false)
const phoneNumberError = ref(false)

function validateName() {
  nameError.value = !(!!formConfig.name)
}

function validateEmail() {
  emailError.value = !(!!formConfig.email)
}

function validatePhoneNumber() {
  phoneNumberError.value = !(!!formConfig.phoneNumber)
}

async function updateData() {
  // TODO - Hacer que primero compruebe esto y luego abra el modal
  if (
      !nameError.value
      && !emailError.value
      && !phoneNumberError.value
  ) {
    try {
      await adminStore.updateBusiness(formConfig)
      notify({
        type: 'success',
        title: 'Cambio realizado con éxito'
      })
      router.back()
    } catch {
      notify({
        type: 'error',
        title: 'Ha habido algún error',
        text: 'Por favor, vuelve a intentarlo más tarde'
      })
    }
  } else {
    notify({
      type: 'error',
      title: 'Formulario incorrecto',
      text: 'Algún campo del formulario no cumple las reglas. Por favor, revísalo mejor.'
    })
  }
}

function cancel() {
  router.back()
}
</script>
