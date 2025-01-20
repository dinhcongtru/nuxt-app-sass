<template>
    <div class="destination_slide">
        <Splide :options="props.options" aria-labelledby="slide destination_slide top" :has-track="false">
            <SplideTrack>
                <SplideSlide v-for="(e, i) in props.data" :key="i">
                    <div class="item">
                        <h3 class="place">{{ e.place }}</h3>
                        <span class="sit">{{ e.sit }}</span>
                        <div class="thumb">
                            <NuxtImg :src="e.thumb" width="200" height="200" alt="destination_slide img" />
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
</template>

<script lang="ts" setup>
import type { Options } from '@splidejs/splide';
const props = defineProps<{
    data: Array<{
        place: string
        sit: string
        thumb: string
    }>;
    options: Options;
}>();
</script>

<style lang="sass" scoped>
@import './DestinationTop'
</style>