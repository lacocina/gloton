<template>
  <button :class="lightDarkModeModule.lightDarkMode"
          type="button"
          @click="toggleDarkMode()">
      <span v-if="!isDarkMode" class="material-symbols-rounded">
          light_mode
      </span>
      <span v-else class="material-symbols-rounded">
          dark_mode
      </span>
  </button>
</template>

<script lang="ts" setup>
import lightDarkModeModule from "@css/components/atoms/light-dark-mode.module.css"
import { ref } from "vue";

const userHasDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDarkMode = ref(userHasDarkMode)

if (userHasDarkMode) {
    setDarkMode(isDarkMode.value)
}

function setDarkMode(isDark: boolean) {
    const el = document.getElementsByTagName('html')[0]
    if (isDark) {
        el.classList.add('dark')
    } else {
        el.classList.remove('dark')
    }
}
function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    setDarkMode(isDarkMode.value)
}

</script>

