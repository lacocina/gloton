<template>
<div :class="OContainerModule.oContainer">
  <div :class="txt.hero400">
    txt hero400
  </div>
  <div :class="txt.title300">
    txt title300
  </div>
  <div :class="txt.title200">
    txt title200
  </div>
  <div :class="txt.subtitle200">
    txt subtitle200
  </div>
  <div :class="txt.subtitle100">
    txt subtitle100
  </div>
  <div :class="txt.label">
    txt label
  </div>
</div>

<div :class="OContainerModule.oContainer">
  <o-inset>o-inset</o-inset>
  <o-inset size="xs">o-inset + xs</o-inset>
  <o-inset size="lg" modifier="stretch">o-inset + lg + stretch</o-inset>
  <o-inset size="lg" modifier="squish">o-inset + lg + squish</o-inset>
  <o-inset size="xl" modifier="section">o-inset + xl + section</o-inset>
</div>

<div :class="OContainerModule.oContainer">
  <o-stack size="xl">
    <o-stack>
      <div>o-stack item</div>
      <div>o-stack item</div>
      <div>o-stack item</div>
    </o-stack>
    <o-stack size="sm">
      <div>o-stack item</div>
      <div>o-stack item</div>
      <div>o-stack item</div>
    </o-stack>
  </o-stack>
</div>
</template>

<script lang="ts" setup>
import OInset from "@components/objects/OInset.vue";
import OStack from "@components/objects/OStack.vue";
import OContainerModule from "@css/objects/o-container.module.css"
import txt from "@css/components/atoms/txt.module.css"
</script>
