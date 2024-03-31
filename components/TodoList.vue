<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ tag.title }}</p>
    <p>{{ priority }}</p>
    <p>{{ is_completed }}</p>
    <p>{{ created_at }}</p>
  </div>
</template>

<script setup lang="ts">
import type { TList } from "../utils/common-types";

defineProps<TList>();
</script>

<style scoped></style>
