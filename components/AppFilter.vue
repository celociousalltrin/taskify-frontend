<template>
  <div class="filter-container">
    <h3>{{ heading }}-</h3>
    <div class="child-container">
      <p
        v-for="item in data"
        :key="item.id"
        class="filter-values"
        @click="$emit('addFilter', item.id, keyName)"
        :class="{ 'active-filter': filterQueryObj[keyName] === item.id }"
      >
        {{ item.value }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TFilterDataType } from "../utils/common-types";

defineProps<{
  data: TFilterDataType[];
  heading: string;
  filterQueryObj: Record<string, any>;
  keyName: string;
}>();
</script>

<style scoped>
.filter-container {
  display: flex;
  justify-content: flex-start;
}

.filter-container > h3 {
  margin-bottom: 0;
}

.child-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1em;
  flex-wrap: wrap;
}

.filter-values {
  background-color: transparent;
  padding: 0.3em 0.8em;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  margin-left: 1rem;
  margin-bottom: 0;
}

.filter-values:hover {
  background-color: aquamarine;
}

.active-filter,
.active-filter:hover {
  background-color: aqua;
}
</style>
