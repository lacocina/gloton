<template>
<form :class="oStack.oStack">
    <h3 :class="txt.title200">Datos del producto</h3>
    <div :class="baseInput.baseInput">
        <label for="name" :class="baseInput.label">name label</label>
        <input v-model.lazy="formConfig.name"
               @blur="nameChange"
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
               id="price"
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
    <div :class="[oFlex.oFlex, oFlex.endCenter, uGap.lg]">
        <label for="showProduct">Mostrar en la web</label>
        <input v-model.lazy="formConfig.show" type="checkbox" :checked="formConfig.show" id="showProduct">
    </div>
    <div :class="[oFlex.oFlex, oFlex.endCenter, uGap.md]">
        <base-button button-style="secondary"
                     disabled
                     @click="deleteProduct">Eliminar</base-button>
        <base-button button-style="secondary"
                     disabled
                     @click="cancel">Cancelar</base-button>
        <base-button @click="saveForm">Guardar</base-button>
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
import BaseButton from "@components/ui/BaseButton.vue";

import { useRouter } from "vue-router";

const router = useRouter()

const emit = defineEmits(['name-change', 'save-form'])

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
  console.log('Delete item')
}

function cancel() {
  router.back()
}

function saveForm() {
  if (formConfig.name  && formConfig.price) {
    emit('save-form', formConfig)
    nameError.value = false
    priceError.value = false
  }
  if (!formConfig.name) nameError.value = true
  if (!formConfig.price) priceError.value = true
}

function nameChange() {
  emit('name-change', formConfig.name)
}

const vAutofocus = {
  mounted: (el) => {
    if (!props.productData) {
      el.focus()
    }
  }
}

onMounted(() => nameChange())

</script>
