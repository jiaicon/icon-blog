<template>
  <div>
    <div v-for="item in data" :key="item.id">
      {{item.title}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps } from 'vue';

const props = defineProps(['data']);


</script>
