<template>
<!-- TODO - ¿Cómo puedo hacer esto en una variable en el script? -->
<router-link :to="{ name: routeName, params }"
             :class="[
                 addItem.addItem,
                 oInsetModule.oInset,
                 oInsetModule.lg,
                 oInsetModule.stretch,
                 oFlexModule.oFlex,
                 oFlexModule.betweenCenter
             ]">
    <span :class="txt.title200">
        <slot/>
    </span>
    <span class="material-symbols-rounded">
        add_circle
    </span>
</router-link>
</template>

<script lang="ts" setup>
import txt from "@css/components/atoms/txt.module.css"
import oInsetModule from '@css/objects/o-inset.module.css'
import oFlexModule from '@css/objects/o-flex.module.css'

interface Props {
    routeName: string,
    params?: object
}

defineProps<Props>()

</script>

<style lang="scss" module="addItem">
.addItem {
    border-radius: var(--border-radius-md);
    background-color: var(--bgc-color-softest);
    color: var(--color-brand-primary-500);
    transition-duration: var(--transition-duration-500);
}
</style>
