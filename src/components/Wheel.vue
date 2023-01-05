<script setup>
import { translate } from "../utils";
const { size = 400 } = defineProps(["size"]);
const viewBox = `${0} ${0} ${size} ${size}`;
</script>

<template>
  <svg
    class="block"
    xmlns="http://www.w3.org/2000/svg"
    :view-box.camel="viewBox"
  >
    <g :transform="translate(size / 2, size / 2)"><slot /></g>
  </svg>
</template>
