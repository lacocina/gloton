<template>
<footer :class="theFooterModule.footer">
  <span :class="theFooterModule.powered">
    Powered by Gloton.app
  </span>
  <h1 :class="txt.hero400">Umai</h1>
</footer>
</template>

<script setup>
import txt from "@css/components/atoms/txt.module.css"
import theFooterModule from "@css/components/molecules/the-footer.module.css"
</script>
