<template>
  <button type="button" class="btn_submit" :id="props.id" :name="props.name" aria-label="btn-submit">
    <span>{{ props.value }}</span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
    value: string
    id?: string
    name?: string
}>();
</script>

<style lang="sass" scoped>
@import './ButtonSubmit'
</style>