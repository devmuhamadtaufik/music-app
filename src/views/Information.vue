<template>
  <div>
    <img :src="store.selectedMusic.image" class="rounded-2xl mb-2" />

    <div class="px-2">
      <div class="font-bold mb-1 capitalize">{{store.selectedMusic.title}}</div>
      <div class="text-xs">{{ store.selectedMusic.artist }}</div>

      <JamTangan></JamTangan>

      <div class="flex justify-between mt-4">
        <div class="h-10 w-10 rounded-full bg-white/10 flex justify-center items-center">
          <i class="bi bi-music-note-beamed text-zinc-400"></i>
        </div>

        <div class="h-10 w-10 rounded-full bg-white/10 flex justify-center items-center">
          <i class="bi bi bi-heart-fill text-red-400"></i>
        </div>
      </div>

      <div class="rounded-2xl bg-white/10 p-4 mt-6 mx-2 text-xs text-zinc-400">
        <div class="mb-2 flex justify-between items-center">
          <div>UP NEXT</div>
          <i class="bi bi-list-ul"></i>
        </div>

        <div class="space-y-1">
          <div class="flex justify-between" v-for="index in 2" :key="index">
            <div>I Fine</div>
            <div>I Fine</div>
            <div>20:20</div>
          </div>
        </div>
      </div>

      <playerButton class="lg:mt-14 mt-6"></playerButton>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import playerButton from "../components/player-buttons.vue";
import JamTangan from "../components/jam-tangan.vue";
import { useMusicStore } from "../store";

const store = useMusicStore();
</script>
