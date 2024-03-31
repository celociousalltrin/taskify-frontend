<template>
  <div>
    <AppList
      v-for="item in tags?.response_data"
      :key="item.id"
      :isTodoList="false"
      :data="item"
      @deleteItem="(value) => (tags.response_data = deleteItem(value, tags))"
      @updateItem="
        (value, item) => (tags.response_data = updateItem(value, tags, item))
      "
    />
  </div>
</template>

<script setup lang="ts">
const { data: tags, pending, error } = useAppFetch("/tags/tag-list/") as any;
</script>

<style scoped></style>
