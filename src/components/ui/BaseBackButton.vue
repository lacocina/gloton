<template>
    <button @click="goBack" :class="backButton.backButton"
            class="material-symbols-rounded">
        arrow_back_ios_new
    </button>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter()
function goBack() {
    router.back()
}
</script>

<style lang="scss" module="backButton">
.backButton {
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  padding-right: .25rem;
  transition-duration: var(--transition-duration-500);
  background-color: #00000060;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;

  &:hover {
    background-color: #00000070;
  }
}
</style>
