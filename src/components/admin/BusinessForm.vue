<template lang="pug">
form.business-form.grid.gap-4(@submit.prevent='submitForm')
  div
    span.material-symbols-rounded storefront
    div
      label Nombre del local*
    input(type="text"
      v-model.trim="name.val"
      :class="inputErrorStyle(name.isValid)"
      :placeholder="$t('business.form.name')"
      @blur="validateItem('name')")
    span(v-if="!name.isValid") Debes rellenar el nombre
  div
    label
      | Numero de calle*
    input(type="number"
      v-model.trim="address.val"
      :class="inputErrorStyle(address.isValid)"
      :placeholder="$t('business.form.streetNumber')"
      @blur="validateItem('address')")
    span(v-if="!address.isValid") Debes poner el número de calle
  button(type="submit") Dale!
  div
    base-button(msg="Hello 3", :margin-button="10")
    base-button(msg="Hello 2", button-style="secondary", :margin-button="10")
</template>

<script lang="ts" setup>
import BaseButton from "@components/ui/BaseButton.vue";
import { reactive, ref } from 'vue';
import type { Ref } from "vue";

interface formItemString {
  val: string
  isValid: boolean
}

interface formItemNumber {
  val: number | null | string
  isValid: boolean
}

const formIsValid: Ref<boolean> = ref(false)

const name: formItemString = reactive({
  val: '',
  isValid: true
})

const address: formItemNumber = reactive({
  val: null,
  isValid: true
})

function inputErrorStyle(isValid:boolean) {
  return !isValid ? 'border border-red-500' : ''
}

function validateItem(value: string) {
  console.log('Blur en ', value)
}

function validateForm() {
  formIsValid.value = true;
  if (name.val === '') {
    name.isValid = false
    formIsValid.value = false
  } else {
    name.isValid = true
  }
  if (!address.val || address.val === '') {
    address.val = null
    address.isValid = false
    formIsValid.value = false
  } else {
    address.isValid = true
  }
}

function submitForm() {
  validateForm()

  if (!formIsValid.value) {
    console.log('NO run')
    return
  }

  const formData = {
    name: name.val,
    address: address.val
  }

  console.log('Ha run', formData)
}


</script>

