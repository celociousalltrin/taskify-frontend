// store/filters.ts
import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app-store",
  state: () => ({
    tags: [] as storeType[],
    isTagModel: false,
  }),
  actions: {
    addTags(value: storeType) {
      this.tags.push(value);
    },
    populateTags(value: storeType[]) {
      this.tags = value;
    },
    toggleTagModel(value: boolean) {
      this.isTagModel = value;
    },
  },
  getters: {
    tagList: (state) => state.tags,
  },
  persist: true,
});
