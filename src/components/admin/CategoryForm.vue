<template>
<base-dialog @confirm="saveForm" ref="confirmDialog"/>
<form @submit.prevent="$refs.confirmDialog.open()" :class="oStack.oStack">
    <h3 :class="txt.title200">Datos sobre la categoría</h3>
    <div :class="baseInput.baseInput">
        <label for="name" :class="baseInput.label">name label</label>
        <input v-model.lazy="formConfig.name"
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
        <label for="name" :class="baseInput.label">description label</label>
        <input v-model.lazy="formConfig.description" id="description" :class="baseInput.input" type="text" placeholder="-"/>
    </div>
    <div :class="[oFlex.endCenter, uGap.lg]">
      <label for="showProduct">Mostrar en la web</label>
      <input v-model.lazy="formConfig.show" type="checkbox" :checked="formConfig.show" id="showProduct">
    </div>
    <base-alert small>
      Próximamente se podrán añadir imágenes
    </base-alert>
    <div :class="[oFlex.endCenter, uGap.md]">
        <base-button button-style="secondary"
                     disabled
                     @click="deleteCategory">Eliminar</base-button>
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

import type { CategoryForm } from "@types/CategoryForm.ts"
import type { MenuCategory } from "@types/MenuCategory.ts"

import { useRouter } from "vue-router"
import { onMounted, reactive, ref } from "vue"

import BaseButton from "@components/ui/BaseButton.vue"
import BaseAlert from "@components/ui/BaseAlert.vue"
import BaseDialog from "@components/ui/BaseDialog.vue"


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

const vAutofocus = {
  mounted: (el) => {
    if (!props.categoryData) {
      el.focus()
    }
  }
}

const emit = defineEmits(['save-form', 'delete-category'])

function saveForm() {
  if (formConfig.name) {
    emit('save-form', formConfig)
  } else {
    nameError.value = true
  }
}

function deleteCategory() {

  if (true) {
    emit('delete-category')
  }
}

function cancel() {
  router.back()
}

defineExpose({
  saveForm
})


</script>
