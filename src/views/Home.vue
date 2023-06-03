<template>
  <div class="space-y-2">
    <template v-for="index in 20" :key="index">
      <div class="flex gap-2 items-center">
        <img
          src="https://i1.sndcdn.com/avatars-000478163859-2o9e49-t500x500.jpg"
          class="w-16 h-16 rounded-2xl shrink-0"
        />

        <div class="space-y-1 grow">
          <div class="font-bold">Remedy</div>
          <div class="text-white/70 text-sm">Remedy</div>
        </div>

        <div><i class="bi bi-heart-fill mr-2"></i></div></div
    ></template>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {});
</script>
