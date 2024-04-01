<template>
  <h1 v-if="pending">Loading.....</h1>
  <div v-else>
    <button class="tag-btn" @click="handleOpenModel">Add Tag</button>
    <AppModal
      v-if="isTagModel"
      @closeModal="(value) => handleCloseModel(value)"
      @handleCreate="handleCreateTag"
      name="Tag"
      :isApiCall="isApiCall"
    >
      <div>
        <h4>Create tag</h4>
        <div class="tag-input">
          <label>Title</label>
          <input v-model="tagTitle" />
        </div>
      </div>
    </AppModal>
    <AppList
      v-for="item in tags?.response_data"
      :key="item.id"
      :isTodoList="false"
      :data="item"
      @deleteItem="(value) => (tags.response_data = deleteItem(value, tags))"
      @updateItem="(value) => (tags.response_data = updateItem(tags, value))"
    />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app-store";
import { storeToRefs } from "pinia";
import { toast } from "vue3-toastify";

const appStore = useAppStore();
const { isTagModel } = storeToRefs(appStore);
const { toggleTagModel, addTags } = appStore;
const { data: tags, pending, error } = useAppFetch("/tags/tag-list/") as any;

const tagTitle = ref("");
const isApiCall = ref(false);

const handleOpenModel = () => {
  toggleTagModel(true);
};

const handleCloseModel = (value: boolean) => {
  toggleTagModel(value);
};

const handleCreateTag = async () => {
  isApiCall.value = true;
  try {
    const result = await $fetch("http://127.0.0.1:8000/api/tags/create-tag/", {
      method: "post",
      body: { title: tagTitle.value },
    });
    tags.value.response_data = [
      (result as any).response_data,
      ...tags.value.response_data,
    ];
    addTags({
      id: (result as any).response_data.id,
      name: (result as any).response_data.title,
    });
    toggleTagModel(false);
    toast("Tag Created Successfully!", {
      autoClose: 1000,
    });
  } catch (err) {
    console.log("🚀 ~ handleCreateTag ~ err:", err);
  } finally {
    isApiCall.value = false;
    tagTitle.value = "";
  }
};
</script>

<style scoped>
.tag-btn {
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  border: 1px solid black;
  background-color: blanchedalmond;
  cursor: pointer;
}

.tag-input {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  margin-bottom: 1em;
}

.tag-input > label {
  font-weight: bolder;
}

.tag-input > input {
  padding: 0.2em 0;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
