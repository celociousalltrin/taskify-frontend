<template>
  <h1 v-if="pending">Loading.....</h1>
  <div v-else>
    <AppList
      v-for="item in tagTodos?.response_data"
      :key="item.id"
      :isTodoList="true"
      :data="item"
      @deleteItem="
        (value) => (tagTodos.response_data = deleteItem(value, tagTodos))
      "
      @updateItem="
        (value) => (tagTodos.response_data = updateItem(tagTodos, value))
      "
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const tagId = (route.params.id as string).split("-")[1];

const {
  data: tagTodos,
  pending,
  error,
} = useAppFetch(`/todos/todo-list?tag=${tagId}`) as any;
</script>

<style scoped></style>
