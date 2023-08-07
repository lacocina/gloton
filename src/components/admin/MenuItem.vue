<template>
<router-link to="admin" :class="[
        adminMenuItemModule.adminMenuItem,
        oFlexModule.oFlex,
        item.show ? '' : adminMenuItemModule.deactivated,
        oFlexModule.betweenCenter
    ]">
    <div :class="adminMenuItemModule.main">
        <h3 :class="txt.title200">
            {{ item.name }}
        </h3>
        <div :class="txt.subtitle100">
            <b :class="adminMenuItemModule.price">{{ item.price }}€</b><em> - {{ item.description }}</em>
        </div>
    </div>
    <div :class="[oFlexModule.oFlex, oFlexModule.betweenCenter]">
        <span v-if="!item.show"
              :class="adminMenuItemModule.deactivatedIcon"
              class="material-symbols-rounded">
            visibility_off
        </span>
        <span class="material-symbols-rounded">
            keyboard_arrow_right
        </span>
    </div>
</router-link>
</template>

<script lang="ts" setup>
import type { MenuItem } from "@types/MenuItem.ts"
import oFlexModule from "@css/objects/o-flex.module.css"
import adminMenuItemModule from "@css/components/molecules/admin-menu-item.module.scss"
import txt from "@css/components/atoms/txt.module.css"

interface Props {
    item: MenuItem
}

defineProps<Props>()
</script>
