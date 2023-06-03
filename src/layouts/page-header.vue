<template>
  <div class="text-white text-center mb-4 relative">
    <div class="absolute bottom-0" v-if="showButtonBack">
      <i class="bi bi-chevron-down"></i>
    </div>
    {{ title }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    default: "",
    type: String,
  },
  showButtonBack: {
    default: false,
    type: Boolean,
  },
});
</script>
