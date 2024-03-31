<template>
  <div class="container">
    <h4>LISTS</h4>
    <div
      v-for="item in AppSideBarData1"
      :key="item.id"
      @click="navigateTo(`/${item.route}`)"
      class="list-container"
      :class="{ active: sideBarName === item.route }"
    >
      <Icon :name="item.iconName" size="28" />
      <p>{{ capitalizeString(item.route) }}</p>
    </div>
  </div>
  <div class="container">
    <h4>TODO</h4>
    <div
      v-for="item in AppSideBarData2"
      :key="item.id"
      @click="navigateTo(`/${item.route}`)"
      class="list-container"
      :class="{ active: sideBarName === item.route }"
    >
      <Icon :name="item.iconName" size="28" />
      <p>{{ capitalizeString(item.route) }}</p>
    </div>
  </div>
  <div class="container">
    <h4>TAGS</h4>
    <div class="tag-container">
      <p
        v-for="(item, index) in tagList"
        :key="index"
        @click="navigateTo(`/tag/${item}`)"
        class="sidebar-tag"
        :class="{ 'tag-active': sideBarName === item }"
      >
        {{ item }}
      </p>
      <button class="tag-add-btn">
        <Icon name="material-symbols:add" size="26" />
        Add
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouteRecordName } from "vue-router";
import { useAppStore } from "~/store/app-store";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { tagList } = storeToRefs(appStore);

type TSideBarType = {
  sideBarName: RouteRecordName | null | undefined;
};

defineProps<TSideBarType>();
</script>

<style scoped>
.container {
  padding-left: 0.5em;
}
h4 {
  margin-bottom: 0.2em;
  margin-top: 2em;
}

.list-container,
.tag-container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0 1em;
  flex-wrap: wrap;
}

.list-container:hover {
  background-color: lightgrey;
  cursor: pointer;
  border-radius: 10px;
  padding-left: 0.3em;
}

.sidebar-tag {
  background-color: #eeeebe;
  padding: 0.3em 0.8em;
  text-align: center;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
}

.sidebar-tag:hover {
  background-color: #fbffcb;
}

.tag-add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 0.1em 0.8em 0.1em 0.4em;
  background-color: transparent;
  cursor: pointer;
}
.tag-add-btn:hover {
  background-color: grey;
  cursor: pointer;
  color: white;
}

.active {
  font-weight: 900;
}

.tag-active {
  font-weight: bolder;
  border: 2px solid black;
}
</style>
