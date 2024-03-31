<template>
  <div>
    <TodoList v-bind="data" v-if="isTodoList" />
    <TagList v-bind="data" v-else />
    <button @click="$emit('deleteItem', data.id)">Delete</button>
    <button @click="$emit('updateItem', data.id)">Update</button>
  </div>
</template>

<script setup lang="ts">
import type { TListType } from "../utils/common-types";

defineProps<TListType>();
</script>

<style scoped></style>
