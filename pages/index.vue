<template>
  <main id="main" class="relative">
    <div class="inner">
      <section class="section" id="banner">
        <div class="inner">
          <div class="bg_banner">
            <div class="thumb">
              <NuxtImg src="/bg-agoda-homepage.png" width="100%" height="100%" alt="banner top" />
            </div>
          </div>
          <SectionBannerTop />
        </div>
      </section>
      <section class="section relative" id="new_pack">
        <div class="inner">
          <div class="heading">
            <h2 class="title">Gói quà chào mừng cho người dùng ứng dụng!</h2>
            <ChipTop title="Mới" />
            <NuxtImg src="/present.svg" width="32" height="32" alt="present" class="img" />
          </div>
          <div class="slide">
            <SliderPresentTop :data="dataPresentTop" :options="optionPresentTop" />
          </div>
        </div>
      </section>
      <section class="section" id="top_destination_cities">
        <div class="inner">
          <h3 class="title">Các điểm đến thu hút nhất Việt Nam</h3>
          <div class="slider">
            <SliderDestinationTop :data="dataDestination" :options="optionsDestination" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { optionPresentTop, dataPresentTop,optionsDestination,dataDestination } from '~/constants/home'
</script>

<style lang="sass">
@import './home'
</style>