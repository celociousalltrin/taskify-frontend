<template>
  <h1 v-if="pending" class="loading-style">Loading.....</h1>
  <div>
    <button @click="handleOpenModel" class="todo-btn">Add Todo</button>
    <AppModal
      v-if="isOpenModal"
      @closeModal="(value) => handleCloseModel(value)"
      @handleCreate="handleCreateTodo"
      name="Todo"
      :isUpdated="isUpdated"
      @handleUpdate="handleUpdateTodo"
      :isApiCall="isApiCall"
    >
      <TodoInput
        v-bind="todoObj"
        @handleChange="(name, value) => handleChange(name, value)"
        :isOpenModal="isOpenModal"
      />
    </AppModal>
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
      @deleteItem="(value) => handleDeleteItem(value)"
      @updateItem="(value) => handleUpdate(value)"
      :isActionTodo="true"
    />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app-store";
import { storeToRefs } from "pinia";
import { toast } from "vue3-toastify";

const appStore = useAppStore();
const { tagList } = storeToRefs(appStore);

const todoQuery = ref({});
const isOpenModal = ref(false);
const isApiCall = ref(false);

let init = {
  title: "",
  priority: "",
  date: "",
  tag: "",
};

const todoObj = ref(init);

const isUpdated = ref(false);
const updatedId = ref(null);

const {
  data: todos,
  pending,
  error,
} = useFetch("http://127.0.0.1:8000/api/todos/todo-list", {
  query: todoQuery.value,
}) as any;

const handleOpenModel = () => {
  todoObj.value = init;
  isOpenModal.value = true;
};

const handleCloseModel = (value: boolean) => {
  todoObj.value = init;
  isOpenModal.value = value;
  isUpdated.value = false;
};

const handleChange = (name: keyof typeof init, value: any) => {
  todoObj.value[name] = value;
};

const handleCreateTodo = async () => {
  isApiCall.value = true;
  try {
    const result = await $fetch(
      "http://127.0.0.1:8000/api/todos/create-todo/",
      {
        method: "post",
        body: todoObj.value,
      }
    );
    const tagDetails = tagList.value.find(
      (o) => o.id === (result as any).response_data.tag
    );
    todos.value.response_data = [
      {
        ...(result as any).response_data,
        tag: { title: tagDetails?.name, id: tagDetails?.id },
      },
      ...todos.value.response_data,
    ];
    isOpenModal.value = false;
    isUpdated.value = false;
    toast("Toddo Created Successfully!", {
      autoClose: 1000,
    });
  } catch (err) {
    console.log("🚀 ~ handleCreateTodo ~ err:", err);
  } finally {
    isApiCall.value = false;
  }
};

const handleDeleteItem = async (id: number) => {
  try {
    await $fetch(`http://127.0.0.1:8000/api/todos/delete-todo/${id}`, {
      method: "put",
    });
    todos.value.response_data = deleteItem(id, todos.value);
    toast("Toddo Deleted Successfully!", {
      autoClose: 1000,
    });
  } catch (err) {
    console.log("🚀 ~ handleDeleteItem ~ err:", err);
  }
};

const handleUpdate = (item: Record<string, any>) => {
  isUpdated.value = true;
  updatedId.value = item.id;
  const tagId = String(item.tag.id);
  (todoObj as any).value = { ...item, tag: tagId };
  isOpenModal.value = true;
};

const handleUpdateTodo = async () => {
  isApiCall.value = true;
  try {
    const result = await await $fetch(
      `http://127.0.0.1:8000/api/todos/update-todo/${updatedId.value}`,
      {
        method: "put",
        body: todoObj.value,
      }
    );
    const tagDetails = tagList.value.find(
      (o) => o.id === (result as any).response_data.tag
    );
    todos.value.response_data = updateItem(todos.value.response_data, {
      ...(result as any).response_data,
      tag: { title: tagDetails?.name, id: tagDetails?.id },
    });
    isOpenModal.value = false;
    isUpdated.value = false;
  } catch (err) {
    console.log("🚀 ~ handleUpdateTodo ~ err:", err);
  } finally {
    isApiCall.value = false;
  }
};
</script>

<style scoped>
.todo-btn {
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  border: 1px solid black;
  background-color: bisque;
  cursor: pointer;
}

.loading-style {
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 110vh;
  top: -10%;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
}
</style>
