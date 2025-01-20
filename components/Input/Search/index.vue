<template>
  <div class="input_search">
    <UIcon name="cil:search" class="size-8 icon" />
    <input type="text" class="input_text" :name="props.name" :value="props.modelValue" :placeholder="props.placeholder" :disabled="props.disabled" :id="props.id" aria-label="input-text-search" @input="onChange" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    id?: string
    name?: string
    modelValue: string
    disabled?: boolean
    placeholder: string 

}>();

const emits = defineEmits(['update:modelValue']);

const onChangeEmit = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits('update:modelValue', target.value);
}

const onChange = useDebounce(onChangeEmit, 500);

</script>

<style lang="sass" scoped>
@import './inputSearch'
</style>