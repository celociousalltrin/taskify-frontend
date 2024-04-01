<template>
  <div>
    <div v-if="isTodoList" class="lst-container">
      <TodoList v-bind="data">
        <button
          @click="$emit('updateItem', data)"
          class="upd-btn"
          v-if="isActionTodo"
        >
          Edit
        </button>
        <button
          @click="$emit('deleteItem', data.id)"
          class="btn-del"
          v-if="isActionTodo"
        >
          Delete
        </button>
      </TodoList>
    </div>
    <div class="lst-container" v-else>
      <TagList v-bind="data">
        <button @click="$emit('updateItem', data)" class="upd-btn">
          Update
        </button>
        <button @click="$emit('deleteItem', data.id)" class="btn-del">
          Delete
        </button>
      </TagList>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TListType } from "../utils/common-types";

defineProps<TListType>();
</script>

<style scoped>
.lst-container {
  display: flex;
}
.upd-btn {
  height: 2em;
  margin-top: 1em;
  border-radius: 5px;
  border: 1px solid black;
  background-color: burlywood;
  cursor: pointer;
}
.btn-del {
  height: 2em;
  margin-top: 1em;
  border-radius: 5px;
  border: 1px solid black;
  background-color: lightsalmon;
  cursor: pointer;
}
</style>
