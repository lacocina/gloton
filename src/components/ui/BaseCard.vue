<template>
<router-link :to="href" :class="[cardModule.card, oInsetModule.oInset]">
    <div v-if="imgSrc" :class="cardModule.imageWrapper">
        <img :alt="title" :src="imgSrc"/>
    </div>
    <span v-if="leftIcon && !imgSrc" :class="cardModule.leftIcon" class="material-symbols-rounded">
        {{ leftIcon }}
    </span>
    <div :class="[cardModule.content, oStackModule.oStack, oStackModule.xxs]">
        <h3 :class="[txt.hero200, cardModule.title]">
            {{ title }}
        </h3>
        <p v-if="description" :class="txt.subtitle100">{{ description }}</p>
        <div v-if="actionText || itemsLength !== null"
             :class="[oFlexModule.oFlex, oFlexModule.oFlexBetweenCenter, uFlexDirectionModule.rowReverse]">
            <em v-if="actionText" :class="txt.subtitle100">{{ actionText }}</em>
            <b :class="txt.subtitle100" v-if="itemsLength !== null">
                {{ $t('admin.cards.productsNumber', { number: itemsLength }) }}
            </b>
        </div>
    </div>
    <span v-if="rightArrow" :class="cardModule.rightArrow" class="material-symbols-rounded">
        chevron_right
    </span>
</router-link>
</template>

<script lang="ts" setup>
import oInsetModule from '@css/objects/o-inset.module.css'
import oStackModule from '@css/objects/o-stack.module.css'
import oFlexModule from '@css/objects/o-flex.module.css'
import cardModule from "@css/components/molecules/card.module.css"
import txt from "@css/components/atoms/txt.module.css"
import uFlexDirectionModule from "@css/utilities/u-flex-direction.module.css"

interface Props {
    imgSrc?: string
    title: string
    href: string
    description?: string
    actionText?: string
    itemsLength?: number | null
    rightArrow?: boolean
    leftIcon?: string
}

withDefaults(defineProps<Props>(), {
    itemsLength: null,
    rightArrow: false
})
</script>
