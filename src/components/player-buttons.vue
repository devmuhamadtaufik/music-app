<template>
  <div class="flex justify-between text-white items-center">
    <div><i class="bi bi-shuffle"></i></div>

    <div class="w-10 h-10 rounded-full bg-white/5 flex justify-center items-center">
      <i class="bi bi-caret-left-fill"></i>
    </div>
    <div>
      <i
        class="bi bi-pause-circle-fill text-5xl"
        @click="service.pauseOrPlay(store.elementAudio)"
      ></i>
    </div>
    <div class="w-10 h-10 rounded-full bg-white/5 flex justify-center items-center">
      <i class="bi bi-caret-right-fill"></i>
    </div>

    <div><i class="bi bi-repeat"></i></div>
  </div>
</template>

<script setup>
import service from "../service";
import { useMusicStore } from "../store";

const store = useMusicStore();
</script>
