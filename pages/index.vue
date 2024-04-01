<template>
  <div>
    <div v-for="item in result" :key="item">
      <h1>This is Index Page</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
let result: number[] = [];

for (let i = 0; i < 100; i++) {
  result.push(i);
}
</script>

<style scoped></style>
