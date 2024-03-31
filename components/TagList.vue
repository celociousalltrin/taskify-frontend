<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ created_at }}</p>
    <p>{{ is_deleted }}</p>
  </div>
</template>

<script setup lang="ts">
import type { TTagType } from "../utils/common-types";
defineProps<TTagType>();
</script>

<style scoped></style>
