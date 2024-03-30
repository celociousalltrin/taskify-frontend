<template>
  <div class="container">
    <div
      v-for="item in appFooterData"
      :key="item.id"
      @click="handleClick(item)"
      :class="{ 'active-footer': activeFooterId === item.id }"
    >
      <Icon :name="item.iconName" size="36" />
    </div>
  </div>
</template>

<script setup lang="ts">
type TSingleFooter = { id: number; iconName: string; route: string };
const activeFooterId = ref<null | number>(null);

const handleClick = (data: TSingleFooter) => {
  navigateTo(`/${data.route}`);
  activeFooterId.value = data.id;
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  padding: 1em 0;
}

.active-footer {
  background-color: #c2c2ae;
  color: black;
  padding: 0.2em;
  border-radius: 10px;
}
</style>
