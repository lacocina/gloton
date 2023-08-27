<template>
<section :class="locationBanner.locationBanner">
  <div :class="locationBanner.imgWrapper">
    <img v-if="imgSrc" :src="imgSrc" alt="Nuestro local">
  </div>
  <o-stack size="xs">
    <h3 :class="txt.title200">¿Dónde estamos?</h3>
    <address>
      C/ Bernat Calvet, 2
      <br>
      Mallorca
      <br>
      España
    </address>
    <div>
      <base-button button-style="secondary" button-size="sm">
        Google maps
      </base-button>
    </div>
  </o-stack>
</section>
</template>

<script setup lang="ts">
import OStack from "@components/objects/OStack.vue"
import txt from "@css/components/atoms/txt.module.css"
import BaseButton from "@components/ui/BaseButton.vue"
import { getUrlPhoto } from "../../services/unsplash.ts"
import { computedAsync } from "@vueuse/core"

const imgSrc = computedAsync(() => getUrlPhoto('iBR8QeaYNbw'))
</script>

<style lang="scss" module="locationBanner">
.location-banner {
  display: grid;
  align-items: end;
  grid-template-columns: 1fr 1fr;
  composes: lg from '../../css/utilities/u-gap.module.css';

  address {
    font-size: var(--font-size-100);
    font-style: italic;
    color: var(--color-gray-300);
  }
}

.img-wrapper {
  height: 12rem;
  overflow: hidden;
  border-radius: var(--border-radius-lg);

  img {
    object-fit: cover;
    object-position: center center;
  }
}
</style>
