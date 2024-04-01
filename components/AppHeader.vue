<template>
  <div class="container" v-if="!isMobileMenu">
    <h2>
      {{ (headername as string)?.toUpperCase() }}
    </h2>
    <Icon
      name="radix-icons:hamburger-menu"
      size="36"
      @click="$emit('toggleMenu', true)"
      class="menu-icon"
    />
  </div>
  <div class="mobile-menu-container" v-else>
    <Icon
      name="material-symbols:close-rounded"
      size="48"
      @click="$emit('toggleMenu', false)"
      class="mobile-menu-icon"
    />
    <div>
      <h2 class="menu-heading">Tags</h2>
      <div
        v-for="item in tagList"
        :key="item.id"
        @click="handleMobileMenu(item)"
        class="mobile-menu-list"
      >
        <h3>{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouteRecordName } from "vue-router";

import { useAppStore } from "~/store/app-store";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { tagList } = storeToRefs(appStore);

const emit = defineEmits(["toggleMenu"]);

type THeaderPropsType = {
  headername: RouteRecordName | null | undefined;
  isMobileMenu: boolean;
};
defineProps<THeaderPropsType>();

const handleMobileMenu = (item: Record<string, any>) => {
  navigateTo(`/tag/${item.name.toLowerCase()}-${item.id}`);
  emit("toggleMenu", false);
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;
}

.mobile-menu-container {
  background-color: lightgrey;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  bottom: 0;
  z-index: 100;
  border-radius: 10px;
  position: absolute;
  right: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-menu-icon {
  position: absolute;
  right: 10px;
  top: 5px;
}

.menu-heading {
  font-weight: bolder;
}

.mobile-menu-list:active {
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 0.1px 4px;
}

@media (min-width: 576px) {
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
  .mobile-menu-container {
    display: none;
  }
  .menu-icon {
    display: none;
  }
}
@media (min-width: 1200px) {
}
</style>
