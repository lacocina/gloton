<template>
<form @submit.prevent='submitForm' class="business-form grid gap-4">
  <div>
    <span class="material-symbols-rounded">
      storefront
    </span>
    <div>
      <label>Numero del local *</label>
    </div>
    <input type="text"
           v-model.trim="name.val"
           :class="inputErrorStyle(name.isValid)"
           :placeholder="$t('business.form.name')"
           @blur="validateItem('name')"/>
    <span v-if="!name.isValid">
      Debes rellenar el nombre
    </span>
  </div>
  <div>
    <label>Numero de calle *</label>
    <input type="number"
           v-model.trim="address.val"
           :class="inputErrorStyle(address.isValid)"
           :placeholder="$t('business.form.streetNumber')"
           @blur="validateItem('address')"/>
    <span v-if="!address.isValid">
        Debes poner el número de calle
    </span>
  </div>
  <button type="submit">Dale!</button>
  <div>
    <base-button :margin-button="10">Hello 3</base-button>
    <base-button button-style="secondary" :margin-button="10">Hello 2</base-button>
  </div>
</form>
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

