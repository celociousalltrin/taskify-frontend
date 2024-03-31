<template>
  <div
    class="to-list-container"
    :class="{ 'completed-container': is_completed || updatedIds.includes(id) }"
  >
    <p class="title">{{ title }}</p>
    <p class="tag-title">{{ tag.title }}</p>
    <p :class="priorityClass" class="priority">{{ priority }}</p>
    <p class="created-at">{{ convertDate(created_at) }}</p>
    <slot class="btn" />
    <div class="tick-icon-container" @click="handleComplete(id, is_completed)">
      <Icon
        name="teenyicons:tick-circle-solid"
        :class="{
          'complete-tick-icon': is_completed || updatedIds.includes(id),
        }"
        class="tick-icon"
        size="28"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TList } from "../utils/common-types";

const updatedIds = ref<number[]>([]);

const props = defineProps<TList>();

const priorityClass = computed(() => {
  switch (props.priority) {
    case "low":
      return "low-style";
    case "medium":
      return "medium-style";
    default:
      return "high-style";
  }
});

const handleComplete = async (id: number, value: boolean) => {
  try {
    await $fetch(`http://127.0.0.1:8000/api/todos/update-todo/${id}`, {
      method: "put",
      body: { is_completed: true },
    });
    updatedIds.value.push(id);
  } catch (err) {
    console.log("🚀 ~ handleComplete ~ err:", err);
  }
};
</script>

<style scoped>
.to-list-container {
  margin-top: 2em;
  display: flex;
  background-color: #84adea;
  flex-wrap: wrap;
  gap: 1em;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.3em 0.5em 0.5em 0.6em;
}

.completed-container {
  background-color: #02d67f;
}

.title {
  font-weight: bolder;
}

.tag-title {
  padding: 0.1em 0.3em;
  border: 1px solid black;
  border-radius: 3px;
  background-color: blanchedalmond;
}

.priority {
  padding: 0.1em 0.3em;
  border: 1px solid black;
  border-radius: 3px;
}

.low-style {
  background-color: lightpink;
}

.medium-style {
  background-color: lightcoral;
}

.high-style {
  background-color: rgb(235, 66, 66);
}
.tick-icon-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.tick-icon {
  color: grey;
}
.complete-tick-icon {
  color: green;
}
</style>
