<template>
  <the-hero title="hello title" subtitle="hello subtitle" :imgSrc="imgSrc"/>
  <o-inset class="content-page" size="xxl" modifier="stretch">
    content
  </o-inset>
  <the-footer/>
</template>

<script setup lang="ts">
import TheHero from "@components/layout/TheHero.vue";
import { getUrlPhoto } from "../services/unsplash";
import { ref } from "vue";
import TheFooter from "@components/layout/TheFooter.vue";
import OInset from "@components/objects/OInset.vue";

const imgSrc = ref<String>('')

getImage();
async function getImage() {
  imgSrc.value = await getUrlPhoto();
}

</script>

<style>
.content-page {
  background-color: #fff;
  margin: calc(var(--content-page-overlap) * -1) 0;
  border-radius: var(--content-page-overlap);
  position: relative;
  z-index: 1;
}
</style>
