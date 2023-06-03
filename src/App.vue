<template>
  <div class="lg:bg-gray-800 bg-black/95">
    <div class="max-w-sm mx-auto min-h-screen bg-black/95 text-white">
      <div class="p-6">
        <pageHeader title="Now Playing"></pageHeader>
        <router-view></router-view>
      </div>

      <div class="sticky bg-white bottom-0 rounded-xl">
        <div>
          <img src="" class="w-16 h-16 p-4" />
        </div>
      </div>
    </div>
  </div>

  <audio
    :src="store.selectedMusic.music"
    @loadedmetadata="populateElementAudio()"
  ></audio>
</template>

<script setup>
import { onMounted } from "vue";
import pageHeader from "./layouts/page-header.vue";
import axios from "axios";
import { useMusicStore } from "./store.js";
import service from "./service";

const store = useMusicStore();

onMounted(async () => {
  await getList();
});

async function getList() {
  const { data } = await axios.get("https://music-api.matrikdev.repl.co/");
  store.musicList = data;
  store.selectedMusic = data[0];
  store.selectedMusic.durationPlay = 0;
}

function populateElementAudio() {
  store.elementAudio = service.getElemetAudio();
  store.selectedMusic.duration = service.getDuration(store.elementAudio);
  store.selectedMusic.onePercent = store.selectedMusic.duration / 100;
}
</script>
