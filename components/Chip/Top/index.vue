<template>
  <span class="chip">
    {{ props.title }}
  </span>
</template>

<script lang="ts" setup>
const props = defineProps<{
    title: string
}>();
</script>

<style lang="sass" scoped>
.chip
    display: inline-block
    padding: 4px 8px
    background-color: #c53829
    text-align: center
    border-radius: 2px
    font-size: 14px
    line-height: 20px
    color: #fff
</style>