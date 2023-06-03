import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMusicStore = defineStore("music", () => {
  const musicList = ref([]);
  const elementAudio = ref({});
  const selectedMusic = ref({
    duration: 0,
    durationPlay: 0,
    onePercent: 0,
    music: "",
  });

  const player = ref({
    touch: false,
  });

  return { musicList, elementAudio, selectedMusic, player };
});
