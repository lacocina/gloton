<template>
<section :class="[contentPage.contentPage, contentPage.resetTop]">
    <header :class="categoryItemForm.header">
      <div :class="[oFlex.oFlex, oFlex.startCenter, uGap.lg]">
          <base-back-button/>
          <div>
              <div :class="oFlex.startCenter">
                  <span>{{ categoryName }}</span>
                  <span> / {{ subtitle }}</span>
              </div>
              <h2 :class="[categoryItemForm.title, txt.title300]">
                  {{ formConfig.name }}
              </h2>
          </div>
      </div>
    </header>
    <div :class="oStack.oStack">
        <div :class="baseInput.baseInput">
            <label for="name" :class="baseInput.label">name label</label>
            <input v-model.lazy="formConfig.name" id="name" :class="baseInput.input" type="text" placeholder="-"/>
        </div>
        <div :class="baseInput.baseInput">
            <label for="name" :class="baseInput.label">price label</label>
            <input v-model.lazy="formConfig.price" id="price" :class="baseInput.input" type="number" placeholder="-"/>
        </div>
        <div :class="baseInput.baseInput">
            <label for="name" :class="baseInput.label">description label</label>
            <input v-model.lazy="formConfig.description" id="description" :class="baseInput.input" type="text" placeholder="-"/>
        </div>
        <div>
            <input v-model.lazy="formConfig.show" type="checkbox" :checked="formConfig.show">
        </div>
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
import BaseBackButton from "@components/ui/BaseBackButton.vue"
import { onMounted, reactive } from "vue"
import type { MenuItem } from "@types/MenuItem.ts"
import type { CategoryItemForm } from "@types/CategoryItemForm.ts"
import baseInput from "@css/components/atoms/base-input.module.css"
import oStack from "@css/objects/o-stack.module.css"

const formConfig = reactive<CategoryItemForm>({
    name: '',
    price: undefined as number | undefined,
    description: '',
    show: true
})

interface Props {
    categoryName: string
    itemData?: MenuItem
}

const props = defineProps<Props>()

onMounted(() => {
    if (props.itemData) {
        formConfig.name = props.itemData.name
        formConfig.price = props.itemData.price
        formConfig.description = props.itemData.description
        formConfig.show = props.itemData.show
    }
})

const subtitle: string = props.itemData ? 'Editar item' : 'Añadir item'

</script>

<style module="categoryItemForm">
.title {
    color: var(--global-accent-color);
}

.header {
    border-bottom: 1px solid var(--bd-color-brand-softest);
    padding: 0 var(--content-page-x-padding) var(--content-page-x-padding);
    margin: 0 calc(var(--content-page-x-padding) * -1) var(--spacing-rem-xl);
}
</style>
