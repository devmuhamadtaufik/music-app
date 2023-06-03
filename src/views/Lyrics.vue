<template>
  <div class="flex gap-4 mb-6">
    <img
      src="https://i1.sndcdn.com/avatars-000478163859-2o9e49-t500x500.jpg"
      class="rounded-xl w-20 h-20"
    />

    <div class="grow">
      <div>Hallo</div>
      <div class="text-gray-400 text-sm">masuk</div>
    </div>

    <div class="self-end">
      <div class="h-10 w-10 rounded-full bg-white/10 flex justify-center items-center">
        <i class="bi bi-music-note-beamed"></i>
      </div>
    </div>
  </div>

  <div class="bg-white/5 rounded-lg p-4 space-y-2 overflow-auto">
    <div class="flex gap-2 items-center justify-center mb-2">
      <i class="bi bi-music-note-beamed"></i>
      <div>Lyrics</div>
    </div>

    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero iure dignissimos
      soluta laboriosam eos accusamus sit in id? Aperiam, aspernatur. Architecto, maxime.
      Ipsa eveniet, fugiat doloremque officiis aut consequuntur!
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {});
</script>
