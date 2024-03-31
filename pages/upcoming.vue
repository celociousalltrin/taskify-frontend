<template>
  <div>
    <div>
      <h1>Tommorrow TODO</h1>
      <AppList
        v-for="item in tomTodos?.response_data"
        :key="item.id"
        :isTodoList="true"
        :data="item"
        @deleteItem="
          (value) => (tomTodos.response_data = deleteItem(value, tomTodos))
        "
        @updateItem="
          (value, item) =>
            (tomTodos.response_data = updateItem(value, tomTodos, item))
        "
      />
    </div>
    <div>
      <h1>Week TODO</h1>
      <AppList
        v-for="item in weekTodos?.response_data"
        :key="item.id"
        :isTodoList="true"
        :data="item"
        @deleteItem="
          (value) => (weekTodos.response_data = deleteItem(value, weekTodos))
        "
        @updateItem="
          (value, item) =>
            (weekTodos.response_data = updateItem(value, weekTodos, item))
        "
      />
    </div>
    <div>
      <h1>Month TODO</h1>
      <AppList
        v-for="item in monthTodos?.response_data"
        :key="item.id"
        :isTodoList="true"
        :data="item"
        @deleteItem="
          (value) => (monthTodos.response_data = deleteItem(value, monthTodos))
        "
        @updateItem="
          (value, item) =>
            (monthTodos.response_data = updateItem(value, monthTodos, item))
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  data: tomTodos,
  pending: tomPending,
  error: tomError,
} = useAppFetch("/todos/todo-list/?date=tommorrow") as any;

const {
  data: weekTodos,
  pending: weekPending,
  error: weekError,
} = useAppFetch("/todos/todo-list/?date=week") as any;

const {
  data: monthTodos,
  pending: monthPending,
  error: monthError,
} = useAppFetch("/todos/todo-list/?date=month") as any;
</script>

<style scoped></style>
