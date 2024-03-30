<template>
  <div class="app-container">
    <div class="app-header">
      <AppHeader
        :headername="`${String(
          (route.name as string)?.endsWith('id') ? route.params.id : route.name
        )}`"
        @toggleMenu="(value) => handleToogleMobileMenu(value)"
        :isMobileMenu="isMobileMenu"
      />
    </div>
    <div class="app-sidebar">
      <AppSideBar />
    </div>
    <div class="app-body">
      <slot />
    </div>
    <div class="app-footer" v-if="!isMobileMenu">
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const isMobileMenu = ref(false);

const handleToogleMobileMenu = (value: boolean) => {
  isMobileMenu.value = value;
};
</script>

<style scoped>
.app-container {
  width: 100%;
}

.app-header {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: beige;
  padding: 0.1em 0;
  border-radius: 5px;
}

.app-footer {
  background-color: beige;
  position: fixed;
  bottom: -0.4%;
  width: 97%;
  margin-bottom: 3px;
  border-radius: 10px;
}
.app-sidebar {
  display: none;
}

@media (min-width: 576px) {
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
/* @media (min-width: 576px) {
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
} */
</style>
