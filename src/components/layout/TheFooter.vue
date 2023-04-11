<template lang="pug">
footer(:class="theFooterModule.footer")
  span(:class="theFooterModule.powered") Powered by Gloton.app
  h1(:class="txt.hero400") Umai
</template>

<script setup>
import txt from "@css/components/atoms/txt.module.css"
import theFooterModule from "@css/components/molecules/the-footer.module.css"
</script>
