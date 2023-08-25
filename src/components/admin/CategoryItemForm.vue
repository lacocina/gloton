<template>
<form :class="oStack.oStack">
    <h3 :class="txt.title200">Datos del producto</h3>
    <div :class="baseInput.baseInput">
        <label for="name" :class="baseInput.label">name label</label>
        <input v-model.lazy="formConfig.name" v-autofocus id="name" :class="baseInput.input" type="text" placeholder="-"/>
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
                     @click="cancel()">Cancelar</base-button>
        <base-button>Guardar</base-button>
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
import type { CategoryItemForm } from "@types/CategoryItemForm.ts"

import { onMounted, reactive } from "vue"
import BaseButton from "@components/ui/BaseButton.vue";

import { useRouter } from "vue-router";

const router = useRouter()

const formConfig = reactive<CategoryItemForm>({
    name: '',
    price: undefined as number | undefined,
    description: '',
    show: true
})

interface Props {
    itemData?: MenuItem
}

const props = defineProps<Props>()

onMounted(() => {
    if (props.itemData) {
        formConfig.name = props.itemData.name
        formConfig.price = props.itemData.price
        formConfig.description = props.itemData.description
        formConfig.show = props.itemData.show
    }
})

function cancel() {
  router.back()
}

const subtitle: string = props.itemData ? 'Editar item' : 'Añadir item'

const vAutofocus = {
  mounted: (el) => {
    if (!props.itemData) {
      el.focus()
    }
  }
}

</script>
