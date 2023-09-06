<template>
<base-dialog @confirm="deleteProduct"
             :title="`Eliminar ${formConfig.name}`"
             text="¿Estás seguro de querer eliminar este producto?"
             ref="confirmDeleteDialog"/>
<form @submit.prevent="saveProduct" :class="oStack.oStack">
    <h3 :class="txt.title200">Datos del producto</h3>
    <div :class="baseInput.baseInput">
        <label for="name" :class="baseInput.label">name label</label>
        <input v-model.lazy="formConfig.name"
               @blur="nameChange(false)"
               v-autofocus
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
        <label for="name" :class="baseInput.label">price label</label>
        <input v-model.lazy="formConfig.price"
               @blur="validatePrice"
               id="price"
               step="0.1"
               :class="[
                   baseInput.input,
                   priceError ? baseInput.error : ''
                   ]"
               type="number"
               placeholder="-"/>
        <p v-if="priceError" :class="baseInput.errorMessage">
          *Este campo no puede estar vacío
        </p>
    </div>
    <div :class="baseInput.baseInput">
        <label for="name" :class="baseInput.label">description label</label>
        <input v-model.lazy="formConfig.description" id="description" :class="baseInput.input" type="text" placeholder="-"/>
    </div>
    <div :class="[oFlex.endCenter, uGap.lg]">
        <label for="showProduct">Mostrar en la web</label>
        <input v-model.lazy="formConfig.show" type="checkbox" :checked="formConfig.show" id="showProduct">
    </div>
    <div :class="[oFlex.endCenter, uGap.md]">
        <base-button v-if="props.productData"
                     button-style="secondary"
                     disabled
                     @click="$refs.confirmDeleteDialog.open()">Eliminar</base-button>
        <base-button button-style="secondary"
                     disabled
                     @click="cancel">Cancelar</base-button>
        <base-button button-type="submit">Guardar</base-button>
    </div>
</form>
</template>

<script lang="ts" setup>
import txt from "@css/components/atoms/txt.module.css"
import oFlex from "@css/objects/o-flex.module.css"
import oStack from "@css/objects/o-stack.module.css"
import uGap from "@css/utilities/u-gap.module.css"
import baseInput from "@css/components/atoms/base-input.module.css"

import type { MenuItem } from "@types/MenuItem.ts"
import type { ProductForm } from "@types/ProductForm.ts"

import { onMounted, reactive, ref } from "vue"
import BaseButton from "@components/ui/BaseButton.vue"

import { useRouter } from "vue-router"
import { useNotification } from "@kyvg/vue3-notification"
import BaseDialog from "@components/ui/BaseDialog.vue"

const router = useRouter()
const { notify } = useNotification()

const emit = defineEmits([
  'save-form',
  'delete-product',
  'name-change'
])

const formConfig = reactive<ProductForm>({
    name: '',
    price: undefined as number | undefined,
    description: '',
    show: true
})

const nameError = ref(false)
const priceError = ref(false)

interface Props {
    productData?: MenuItem
}

const props = defineProps<Props>()

onMounted(() => {
    if (props.productData) {
        formConfig.name = props.productData.name
        formConfig.price = props.productData.price
        formConfig.description = props.productData.description
        formConfig.show = props.productData.show
    }
})

function deleteProduct() {
  emit('delete-product')
}

function cancel() {
  router.back()
}

function saveProduct() {
  if (formConfig.name  && formConfig.price) {
    emit('save-form', formConfig)
    nameError.value = false
    priceError.value = false
    router.back()
  } else {
    validateName()
    validatePrice()
    notify({
      type: 'error',
      title: 'Formulario incorrecto',
      text: 'Algún campo del formulario no cumple las reglas. Por favor, revísalo mejor.'
    })
  }
}

function validateName() {
  nameError.value = !(!!formConfig.name)
}

function validatePrice() {
  priceError.value = !(!!formConfig.price)
}

function nameChange(mountedComponent) {
  if (!mountedComponent) {
    validateName()
  }
  emit('name-change', formConfig.name)
}

const vAutofocus = {
  mounted: (el) => {
    if (!props.productData) {
      el.focus()
    }
  }
}

onMounted(() => nameChange(true))

</script>
