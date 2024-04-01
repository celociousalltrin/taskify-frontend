<template>
  <h1 v-if="pending">Loading.....</h1>
  <div v-else>
    <div>
      <h1>Tommorrow TODO</h1>
      <AppList
        v-for="item in data.tomTodos?.response_data"
        :key="item.id"
        :isTodoList="true"
        :data="item"
        @deleteItem="
          (value) =>
            (data.tomTodos.response_data = deleteItem(value, data.tomTodos))
        "
        @updateItem="
          (value) =>
            (data.tomTodos.response_data = updateItem(data.tomTodos, value))
        "
      />
    </div>
    <div>
      <h1>Week TODO</h1>
      <AppList
        v-for="item in data.weekTodos?.response_data"
        :key="item.id"
        :isTodoList="true"
        :data="item"
        @deleteItem="
          (value) =>
            (data.weekTodos.response_data = deleteItem(value, data.weekTodos))
        "
        @updateItem="
          (value) =>
            (data.weekTodos.response_data = updateItem(data.weekTodos, value))
        "
      />
    </div>
    <div>
      <h1>Month TODO</h1>
      <AppList
        v-for="item in data?.monthTodos?.response_data"
        :key="item.id"
        :isTodoList="true"
        :data="item"
        @deleteItem="
          (value) =>
            (data.monthTodos.response_data = deleteItem(
              value,
              data?.monthTodos
            ))
        "
        @updateItem="
          (value) =>
            (data.monthTodos.response_data = updateItem(
              data?.monthTodos,
              value
            ))
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, pending } = useAsyncData("upcoming", async () => {
  const [tomTodos, weekTodos, monthTodos] = (await Promise.all([
    $fetch("http://127.0.0.1:8000/api/todos/todo-list/?date=tommorrow"),
    $fetch("http://127.0.0.1:8000/api/todos/todo-list/?date=week"),
    $fetch("http://127.0.0.1:8000/api/todos/todo-list/?date=month"),
  ])) as any;
  return { tomTodos, weekTodos, monthTodos };
}) as any;
</script>

<style scoped></style>
