<template>
  <div class="input-container">
    <div class="child input-1">
      <label>Title</label>
      <input :value="title" @input="handleInputChange" name="title" />
    </div>
    <div class="child input-2">
      <label>Priority</label>
      <select :value="priority" @input="handleInputChange" name="priority">
        <option
          v-for="item in priorityFilterData"
          :key="item.id"
          :value="item.id"
        >
          {{ item.value }}
        </option>
      </select>
    </div>
    <div class="child input-3">
      <label>Date</label>
      <input :value="date" @input="handleInputChange" type="date" name="date" />
    </div>
    <div class="child input-4">
      <label>Tag</label>
      <select :value="tag" @input="handleInputChange" name="tag">
        <option v-for="item in tagData" :key="item?.id" :value="item.id">
          {{ item.value }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TFilterDataType, TTagType } from "../utils/common-types";

defineProps<{
  title: string;
  priority: string;
  date: string;
  tag: string;
  isOpenModal: boolean;
}>();

const emit = defineEmits(["handleChange"]);

const handleInputChange = (event: any) => {
  emit("handleChange", event.target.name, event.target.value);
};

onMounted(() => getTagData());

const tagData = ref<TFilterDataType[]>([]);

const getTagData = async () => {
  try {
    const result = await $fetch("http://127.0.0.1:8000/api/tags/tag-list/");
    tagData.value = (result as any).response_data.map((o: any) => ({
      id: o.id,
      value: o.title,
    }));
  } catch (err) {
    console.log("🚀 ~ getTagData ~ err:", err);
  }
};
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin-bottom: 2em;
}

.child {
  display: flex;
  flex-direction: column;
}

.child > label {
  padding-bottom: 0.7em;
  font-weight: bolder;
}

.child > input {
  padding: 0.2em 0;
  border: 1px solid black;
  border-radius: 5px;
}

.child > select {
  padding: 0.2em 0;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
