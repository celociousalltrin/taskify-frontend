<template>
  <h1 v-if="pending">Loading.....</h1>
  <div v-else>
    <AppList
      v-for="item in todos?.response_data"
      :key="item.id"
      :isTodoList="true"
      :data="item"
      @deleteItem="(value) => (todos.response_data = deleteItem(value, todos))"
      @updateItem="
        (value, item) => (todos.response_data = updateItem(value, todos))
      "
    />
  </div>
</template>

<script setup lang="ts">
const {
  data: todos,
  pending,
  error,
} = useAppFetch("/todos/todo-list?date=today") as any;
</script>

<style scoped></style>
