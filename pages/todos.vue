<template>
  <div>
    <button>Add Todo</button>
    <AppFilter
      @addFilter="
        (value, key) => (todoQuery = filterQueryUpdateFn(value, key, todoQuery))
      "
      :data="priorityFilterData"
      heading="priorities"
      :filterQueryObj="todoQuery"
      keyName="priority"
    />
    <AppFilter
      @addFilter="
        (value, key) => (todoQuery = filterQueryUpdateFn(value, key, todoQuery))
      "
      :data="completedFilterData"
      heading="Completed"
      :filterQueryObj="todoQuery"
      keyName="is_completed"
    />

    <AppList
      v-for="item in todos?.response_data"
      :key="item.id"
      :isTodoList="true"
      :data="item"
      @deleteItem="(value) => (todos.response_data = deleteItem(value, todos))"
      @updateItem="
        (value, item) => (todos.response_data = updateItem(value, todos, item))
      "
    />
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue3-toastify";

const todoQuery = ref({});

const {
  data: todos,
  pending,
  error,
} = useFetch("http://127.0.0.1:8000/api/todos/todo-list", {
  query: todoQuery.value,
}) as any;
if (error) {
  // toast(error.message, {
  //   autoClose: 1000,
  // });
}
</script>

<style scoped></style>
