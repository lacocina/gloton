<template>
<div :class="[cardModule.card, oInsetModule.oInset]">
    <div :class="cardModule.imageWrapper">
        <img :src="imgSrc"/>
    </div>
    <div :class="[cardModule.content, oStackModule.oStack, oStackModule.xxs]">
        <h3 :class="[txt.hero200, cardModule.title]">
            Titulo
        </h3>
        <p :class="txt.subtitle100">Descripción</p>
        <em :class="[txt.subtitle100, uTextAlignModule.right]">Ver todas las opciones</em>
    </div>
    <span v-if="false" class="material-symbols-rounded">
        chevron_right
    </span>
</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { getUrlPhoto } from "../../services/unsplash";
import oInsetModule from '@css/objects/o-inset.module.css'
import oStackModule from '@css/objects/o-stack.module.css'
import cardModule from "@css/components/molecules/card.module.css"
import txt from "@css/components/atoms/txt.module.css"
import uTextAlignModule from "@css/utilities/u-text-align.module.css"

const imgSrc = ref<String>('')
async function getImage() {
    imgSrc.value = await getUrlPhoto('nzyzAUsbV0M');
}
getImage();
</script>
