<script setup>
import { interpolateSinebow } from "d3";
import { arcPath, polar, remap, rotate, translate, scale } from "../utils";
const {
  options,
  inner = 0,
  outer = 100,
  corner = 0,
  padding = 0,
  selection = {},
} = defineProps([
  "options",
  "inner",
  "outer",
  "corner",
  "padding",
  "selection",
]);
defineEmits(["select"]);

const sectors = options.map((option, i) => {
  const count = options.length;
  const sector = 360 / count;
  const currentAngle = i * sector;
  const sectorMiddleRadius = inner + (outer - inner) / 2;

  const d = arcPath(
    currentAngle,
    currentAngle + sector,
    inner,
    outer,
    corner,
    padding
  );
  const point = polar(currentAngle + sector / 2, sectorMiddleRadius);
  const color =
    option.fill || interpolateSinebow(remap(currentAngle, 0, 360, 0, 1));
  const flip = currentAngle >= 180 && currentAngle < 0;
  const transform = [
    rotate(currentAngle + sector / 2 - 90),
    translate(sectorMiddleRadius, 0),
    scale(flip ? -1 : 1, flip ? -1 : 1),
  ].join();
  return { ...option, d, point, color, transform, flip, currentAngle };
});
</script>
<template>
  <g class="rotate(0)">
    <g v-for="(sector, i) in sectors">
      <path
        :d="sector.d"
        :fill="sector.color"
        :opacity="
          sector.fill ? 1 : remap(selection[sector.title] || 0, 0, 10, 0.3, 1)
        "
        @click="$emit('select', sector)"
        class="cursor-pointer hover:brightness-95"
      />
    </g>
    <g v-for="sector in sectors">
      <image
        v-if="sector.icon"
        :x="sector.point.x"
        :y="sector.point.y"
        :href="sector.icon"
        :transform-origin="sector.point.x + ' ' + sector.point.y"
        transform="scale(1.25) translate(-12,-12)"
      />
      <image
        v-if="sector.largeicon"
        :x="sector.point.x"
        :y="sector.point.y"
        :href="sector.largeicon"
        :transform-origin="sector.point.x + ' ' + sector.point.y"
        transform="scale(2) translate(-12,-12)"
        class="pointer-events-none"
      />
      <text
        class="text-xs pointer-events-none select-none"
        dominant-baseline="middle"
        text-anchor="middle"
        :transform="sector.transform"
        opacity="0.5"
      >
        {{ sector.title }}
      </text>
    </g>
  </g>
</template>
