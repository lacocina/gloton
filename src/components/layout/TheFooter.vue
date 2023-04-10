<template lang="pug">
footer(:class="footer.footer")
  span(:class="footer.powered") Powered by Gloton.app
  h1 Umai
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module="footer">
.footer {
  color: white;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: end;
  column-gap: var(--spacing-lg);
  padding: calc(var(--content-page-overlap) + var(--spacing-md)) var(--spacing-xl) var(--spacing-md);
  background-color: var(--color-gray-800);

  h1 {
    line-height: 1;
  }
}

.powered {
  font-size: var(--font-size-100);
  background-color: var(--color-gray-900);
  color: var(--color-gray-200);
  display: inline-block;
  padding: var(--spacing-xxs) var(--spacing-xs);
  line-height: 1;
  border-radius: var(--border-radius-full);
}

</style>
