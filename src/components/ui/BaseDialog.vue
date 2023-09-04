<template>
<teleport to="body">
  <div :class="baseDialog.wrapper">
    <div :class="baseDialog.baseDialog">
      <o-stack size="xl">
        <o-stack size="xs">
          <h3 :class="[txt.title200]">Título</h3>
          <p>Estás seguro explicación</p>
        </o-stack>
        <div :class="oFlex.endCenter">
          <base-button button-style="secondary">Cancelar</base-button>
          <base-button>Confirmar</base-button>
        </div>
      </o-stack>
    </div>
  </div>
</teleport>
</template>

<script setup lang="ts">
import txt from "@css/components/atoms/txt.module.css"
import OStack from "@components/objects/OStack.vue"
import oFlex from "@css/objects/o-flex.module.css"
import BaseButton from "@components/ui/BaseButton.vue"
</script>

<style lang="scss" module="baseDialog">
.wrapper {
  background-color: rgba(black, .6);
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(2px);
  padding: var(--spacing-rem-lg) var(--spacing-md);

  display: grid;
  align-content: center;
  justify-content: center;
  grid-auto-columns: minmax(280px, 450px);
}

.base-dialog {
  color: var(--content-page-font-color);
  background-color: var(--content-page-bgc-color);
  border-radius: var(--border-radius-md);
  box-shadow: 0 0 10px rgba(black, .3);
  padding: var(--spacing-rem-lg);
  margin-bottom: var(--spacing-rem-xl);
}
</style>
