// store/filters.ts
import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app-store",
  state: () => ({
    tags: ["Personal", "Work"] as string[],
  }),
  actions: {
    addTags(value: string) {
      this.tags.push(value);
    },
  },
  getters: {
    tagList: (state) => state.tags,
  },
  persist: true,
});
