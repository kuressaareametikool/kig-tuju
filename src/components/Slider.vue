<script setup>
const { modelValue = "" } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const inputValue = $computed({
  get: () => modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input
    type="range"
    v-model.number="inputValue"
    class="accent-black block h-[2px] cursor-pointer appearance-auto bg-gray-300 w-3/4 md:w-64"
  />
</template>
