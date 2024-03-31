<template>
  <div class="tag-lst-container">
    <p class="tag-title">{{ title }}</p>
    <p>{{ convertDate(created_at) }}</p>
  </div>
</template>

<script setup lang="ts">
import type { TTagType } from "../utils/common-types";
defineProps<TTagType>();
</script>

<style scoped>
.tag-lst-container {
  margin-top: 1em;
  display: flex;
  gap: 1em;
  background-color: lightgray;
  padding-left: 1em;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  padding-right: 1em;
}

.tag-title {
  font-size: 1.1em;
  font-weight: bolder;
}
</style>
