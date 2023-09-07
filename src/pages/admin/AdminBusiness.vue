<template>
    <base-dialog @confirm="updateData"
                 ref="changeNameDialog"
                 title="Cambio de datos"
                 text="Estás a punto de cambiar los datos públicos de tu negocio ¿Estás seguro?"/>
    <form @submit.prevent="$refs.changeNameDialog.open()" class="base-form" :class="oStack.oStack">
        <div :class="BaseInputModule.baseInput">
            <label for="name" :class="BaseInputModule.label">name label</label>
            <input v-model.lazy="formConfig.name" id="name" :class="BaseInputModule.input" type="text" placeholder="-"/>
        </div>
        <div :class="BaseInputModule.baseInput">
            <label for="email" :class="BaseInputModule.label">email label</label>
            <input v-model.lazy="formConfig.email" id="email" :class="BaseInputModule.input" type="text" placeholder="-"/>
        </div>
        <div :class="BaseInputModule.baseInput">
            <label for="phoneNumber" :class="BaseInputModule.label">phoneNumber label</label>
            <input v-model.lazy="formConfig.phoneNumber" id="phoneNumber" :class="BaseInputModule.input" type="text" placeholder="-"/>
        </div>
        <div :class="[oFlex.endCenter, uGap.md]">
          <base-button button-style="secondary" @click="cancel">Cancelar</base-button>
          <base-button button-type="submit">Guardar</base-button>
        </div>
    </form>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue"
import { useAdminStore } from "@store/backoffice/admin.ts"
import oStack from '@css/objects/o-stack.module.css'
import BaseInputModule from '@css/components/atoms/base-input.module.css'
import type { BusinessForm } from "@types/BusinessForm.ts"
import oFlex from "@css/objects/o-flex.module.css"
import uGap from "@css/utilities/u-gap.module.css"
import BaseButton from "@components/ui/BaseButton.vue"
import { useNotification } from "@kyvg/vue3-notification"
import { useRouter } from "vue-router"
import BaseDialog from "@components/ui/BaseDialog.vue";

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

async function updateData() {
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
}

function cancel() {
  router.back()
}
</script>
