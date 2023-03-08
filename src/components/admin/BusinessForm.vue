<template lang="pug">
form.business-form.grid.gap-4(@submit.prevent='submitForm')
  div.grid.gap-0
    span.symbol-test.material-symbols-rounded storefront
    div.flex.justify-between.items-start
      label Nombre del local*
    input.rounded(type="text"
      v-model.trim="name.val"
      :class="inputErrorStyle(name.isValid)"
      :placeholder="$t('business.form.name')"
      @blur="validateItem('name')")
    span.text-red-500(v-if="!name.isValid") Debes rellenar el nombre
  div.grid.gap-2
    label
      | Numero de calle*
    input.rounded(type="number"
      v-model.trim="address.val"
      :class="inputErrorStyle(address.isValid)"
      :placeholder="$t('business.form.streetNumber')"
      @blur="validateItem('address')")
    span.text-red-500(v-if="!address.isValid") Debes poner el número de calle
  button(type="submit") Dale!
  .flex.gap-3
    base-button(msg="Hello 3", :margin-button="10")
    base-button(msg="Hello 2", button-style="secondary", :margin-button="10")
</template>

<script lang="ts" setup>
import BaseButton from "../ui/BaseButton.vue";
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

<style lang="postcss">
.symbol-test {
  font-variation-settings: 'wght' 400;
  transition-duration: 300ms;
  font-size: 90px;

  &:hover {
    font-variation-settings: 'wght' 500;
  }
}
</style>
