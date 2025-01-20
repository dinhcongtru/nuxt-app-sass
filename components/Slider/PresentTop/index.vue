<template>
    <ClientOnly>
        <div class="slide_present">
            <Splide :options="props.options" aria-labelledby="slide present top" :has-track="false">
                <SplideTrack>
                    <SplideSlide v-for="(e, i) in props.data" :key="i">
                        <div class="item">
                            <div class="content">
                                <span class="title">{{ e.title }}</span>
                                <p class="txt">{{ e.text }}</p>
                            </div>
                            <div class="control">
                                <span class="chip" v-if="e.chip">
                                    <UIcon :name="e.chip" class="icon_chip" />
                                </span>
                                <button type="button" class="btn">{{ e.button }}</button>
                                <NuxtImg :src="e.image" width="54" class="card_img" height="54" alt="card-img" />
                            </div>
                        </div>
                    </SplideSlide>
                </SplideTrack>
                <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev">
                        <UIcon name="i-lucide-chevron-left" class="icon" />
                    </button>
                    <button class="splide__arrow splide__arrow--next">
                        <UIcon name="i-lucide-chevron-right" class="icon" />
                    </button>
                </div>
            </Splide>
        </div>
    </ClientOnly>
</template>

<script lang="ts" setup>
import type { Options } from '@splidejs/splide';
const props = defineProps<{
    data: Array<{
        title: string
        text: string
        button: string
        image: string
        chip?: string
    }>;
    options: Options;
}>();
</script>

<style lang="sass" scoped>
@import './PresentTop'
</style>