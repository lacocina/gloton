<template>
<form :class="oStack.oStack">
    <h3 :class="txt.title200">Datos sobre la categoría</h3>
    <div :class="baseInput.baseInput">
        <label for="name" :class="baseInput.label">name label</label>
        <input v-model.lazy="formConfig.name"
               v-autofocus id="name"
               :class="[
                       BaseInputModule.input,
                       nameError ? BaseInputModule.error : ''
                   ]"
               type="text"
               placeholder="-"/>
        <p v-if="nameError" :class="BaseInputModule.errorMessage">
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
    <base-alert small>
      Próximamente se podrán añadir imágenes
    </base-alert>
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

import type { CategoryForm } from "@types/CategoryForm.ts"
import type { MenuCategory } from "@types/MenuCategory.ts"

import { onMounted, reactive, ref } from "vue"
import BaseButton from "@components/ui/BaseButton.vue"

import { useRouter } from "vue-router"
import BaseAlert from "@components/ui/BaseAlert.vue"
import BaseInputModule from "@css/components/atoms/base-input.module.css";

const router = useRouter()

const formConfig = reactive<CategoryForm>({
    name: '',
    description: '',
    show: true
})

const nameError = ref(false)

interface Props {
    categoryData?: MenuCategory
}

const props = defineProps<Props>()

onMounted(() => {
    if (props.categoryData) {
        formConfig.name = props.categoryData.name
        formConfig.description = props.categoryData.description
        formConfig.show = props.categoryData.show
    }
})

function cancel() {
  router.back()
}

const vAutofocus = {
  mounted: (el) => {
    if (!props.categoryData) {
      el.focus()
    }
  }
}

const emit = defineEmits(['save-form'])

function saveForm() {
  if (formConfig.name) {
    emit('save-form', formConfig)
  } else {
    nameError.value = true
  }
}

defineExpose({
  saveForm
})


</script>
