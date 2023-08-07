<template>
<section :class="[contentPage.contentPage, contentPage.resetTop]">
    <header :class="categoryItemForm.header">
      <div :class="[oFlex.oFlex, oFlex.startCenter, uGap.lg]">
          <span class="material-symbols-rounded">
              arrow_back_ios_new
          </span>
          <div>
              <div :class="oFlex.startCenter">
                  <span>Nombre categoría</span>
                  <span> / Nuevo/editar</span>
              </div>
              <h2 :class="[categoryItemForm.title, txt.title300]">Nombre</h2>
          </div>
      </div>
    </header>
    <div>
        aqui
    </div>
</section>
<the-footer/>
</template>

<script lang="ts" setup>
import txt from "@css/components/atoms/txt.module.css"
import oFlex from "@css/objects/o-flex.module.css"
import contentPage from "@css/components/molecules/content-page.module.css"
import uGap from "@css/utilities/u-gap.module.css"
import TheFooter from "@components/layout/TheFooter.vue"
</script>

<style module="categoryItemForm">
.title {
    color: var(--global-accent-color);
}

.header {
    border-bottom: 1px solid var(--bd-color-brand-softest);
    padding: 0 var(--content-page-x-padding) var(--content-page-x-padding);
    margin: 0 calc(var(--content-page-x-padding) * -1);
}
</style>
