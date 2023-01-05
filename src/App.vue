<script setup>
import Wheel from "./components/Wheel.vue";
import Slices from "./components/Slices.vue";
import Menu from "./components/Menu.vue";

import * as data from "./data";

import "./styles.css";

const page = $ref("start");
const onSelect = (selection) => {
  page = selection.goto || "start";
};
const showMessage = $ref(true);
</script>

<template>
  <div class="md:flex md:justify-center">
    <div class="md:w-1/2">
      <Wheel v-if="page == 'start'">
        <Slices
          :options="data.start"
          :inner="2"
          :outer="150"
          :corner="5"
          :padding="2"
          @select="onSelect"
        />
      </Wheel>
      <Wheel v-if="page == 'up'">
        <Slices
          :options="data.up"
          :inner="4"
          :outer="150"
          :corner="5"
          :padding="2"
          @select="onSelect"
        />
      </Wheel>
      <Menu v-if="page == 'up2'" :options="data.up2" @select="onSelect" />
      <Wheel v-if="page == 'down'">
        <Slices
          :options="data.down"
          :inner="4"
          :outer="150"
          :corner="5"
          :padding="2"
          @select="onSelect"
        />
      </Wheel>
      <Wheel v-if="page == 'down2'">
        <Slices
          :options="data.down2"
          :inner="4"
          :outer="150"
          :corner="5"
          :padding="2"
          @select="onSelect"
        />
      </Wheel>

      <Menu v-if="page == 'down3'" :options="data.down3" @select="onSelect" />
      <Menu v-if="page == 'down4'" :options="data.down4" @select="onSelect" />
    </div>
    <div
      @click="showMessage = false"
      class="duration-1000 transition fixed bottom-8 left-8 right-8 md:w-3/4 text-5xl font-bold opacity-70"
      :class="[
        showMessage
          ? 'opacity-80'
          : 'pointer-events-none opacity-0 -translate-y-8',
      ]"
    >
      TUJU. Kuidas sul läheb?
    </div>
  </div>
</template>
