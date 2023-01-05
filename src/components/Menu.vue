<script setup>
const { options } = defineProps(["options"]);
defineEmits(["select"]);
</script>

<template>
  <div class="grid grid-cols-2 gap-1 p-8">
    <div
      v-for="(option, i) in options"
      class="aspect-square bg-red-500 grid place-items-center text-center text-lg p-6"
      :class="[
        [
          'rounded-tl-[100px]',
          'rounded-tr-[100px]',
          'rounded-bl-[100px]',
          'rounded-br-[100px]',
        ][i % 4],
      ]"
      :style="{ background: option.fill }"
      @click="$emit('select', option)"
    >
      <div class="opacity-80">{{ option.title }}</div>
    </div>
  </div>
</template>
