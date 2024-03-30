<template>
  <div class="app-container">
    <div class="app-header">
      <AppHeader />
    </div>
    <div class="app-sidebar">
      <AppSideBar />
    </div>
    <div class="app-body">
      <slot />
    </div>
    <div class="app-footer">
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-container {
  width: 100%;
  height: 95vh;
  background-color: aqua;
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
