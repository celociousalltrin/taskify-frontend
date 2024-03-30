<template>
  <div>
    <div v-for="item in result" :key="item">
      <h1>Hi from vue This my name is celocious Altrin Mf</h1>
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
