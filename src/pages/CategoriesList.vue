<template lang="pug">
.bg-white.p-4.text-white.flex.justify-between.items-center
  nav Categories list
  .w-full
    div
      input(
        type="text",
        placeholder="Nombre*",
        :class="[patata['nullInputStyles'], patata.title]"
        )
    div
      input(
        type="text",
        placeholder="Descripción",
        :class="patata['nullInputStyles']"
        )
  div
    .flex.justify-between.items-center
      input(
        type="text",
        placeholder="0",
        :class="[patata['nullInputStyles'], patata.price]"
        )
      span(:class="patata.price") €
.bg-white.p-4.text-white.flex.justify-between.items-center
  .w-full
    div
      input(
        type="text",
        placeholder="Nombre*",
        :class="[patata['nullInputStyles'], patata.title]"
      )
    div
      input(
        type="text",
        placeholder="Descripción",
        :class="patata['nullInputStyles']"
      )
  div
    .flex.justify-between.items-center
      input(
        type="text",
        placeholder="0",
        :class="[patata['nullInputStyles'], patata.price]"
      )
      span(:class="patata.price") €

</template>

<script setup lang="ts">

</script>

<style lang="postcss" module="patata">
.title {
  font-weight: bold;

  &::placeholder {
    color: red;
  }
}

.price {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: right;
  &,
  &::placeholder {
    color: orange;
  }
}

.null-input-styles {
  width: 100%;
  &,
  &:focus,
  &:active {
    border: none;
    padding: 0;
    --tw-ring-color: transparent;
  }
}
</style>
