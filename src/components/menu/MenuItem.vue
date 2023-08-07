<template>
<!-- TODO - El v-if debería tenerlo el padre -->
<div :class="MenuItemModule.menuItem" v-if="item.show">
    <div>
      <h2 :class="txt.title200">{{ item.name }}</h2>
      <p v-if="item.description" :class="[MenuItemModule.description, txt.subtitle100]">
          {{ item.description }}
      </p>
    </div>
    <span :class="[MenuItemModule.price, txt.body300]">
        {{ item.price }} €
    </span>
</div>
</template>

<script lang="ts" setup>
import txt from "@css/components/atoms/txt.module.css"
import MenuItemModule from "@css/components/molecules/menu-item.module.css"
import type { MenuItem } from "@types/MenuItem"

interface Props {
    item: MenuItem
}

defineProps<Props>()

</script>
