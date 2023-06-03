<template>
  <div>
    <input
      type="range"
      class="w-full"
      v-model="store.selectedMusic.durationPlay"
      @change="handleChange"
    />
    <div class="flex justify-between text-xs mt-1">
      <div>{{ convertToTimeFormat(store.selectedMusic.durationPlay) }}</div>
      <div>{{ convertToTimeFormat(store.selectedMusic.duration) }}</div>
    </div>
  </div>
</template>

<script setup>
import service from "../service";
import { useMusicStore } from "../store";

const store = useMusicStore();

function handleChange() {
  store.elementAudio.play();
  store.elementAudio.currentTime =
    store.selectedMusic.durationPlay * store.selectedMusic.onePercent;
    console.log(store.elementAudio.currentTime);
}

function convertToTimeFormat(number) {
  if (number === 0) {
    return "00:00";
  }

  const hours = Math.floor(number / 60);
  const minutes = number % 60;
  const timeFormat = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return timeFormat;
}
</script>
