import { useAppStore } from "~/store/app-store";
import { storeToRefs } from "pinia";
import type { TTagType } from "../utils/common-types";
import { useAppFetch } from "#imports";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const appStore = useAppStore();
  const { populateTags, addTags } = appStore;
  const { tags } = storeToRefs(appStore);

  if (!tags.value.length) {
    const { data: tags } = (await useAppFetch("/tags/tag-list/")) as any;

    populateTags(
      tags.value.response_data.map((o: TTagType) => ({
        id: o.id,
        name: o.title,
      }))
    );
  }
});
