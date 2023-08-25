<template>
<form :class="oStack.oStack">
    <h3 :class="txt.title200">Datos del producto</h3>
    <div :class="baseInput.baseInput">
        <label for="name" :class="baseInput.label">name label</label>
        <input v-model.lazy="formConfig.name" v-autofocus @blur="nameChange" id="name" :class="baseInput.input" type="text" placeholder="-"/>
    </div>
    <div :class="baseInput.baseInput">
        <label for="name" :class="baseInput.label">price label</label>
        <input v-model.lazy="formConfig.price" id="price" :class="baseInput.input" type="number" placeholder="-"/>
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

import { onMounted, reactive } from "vue"
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

function cancel() {
  router.back()
}

function saveForm() {
  emit('save-form')
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
