<template>
  <div class="modal-backdrop">
    <div class="modal">
      <slot />

      <div class="modal__footer">
        <button
          type="button"
          class="confirm"
          @click="$emit('handleCreate')"
          v-if="!isUpdated"
        >
          Create {{ name }}
        </button>
        <button
          type="button"
          class="confirm"
          @click="$emit('handleUpdate')"
          v-else
        >
          Update {{ name }}
        </button>

        <button
          type="button"
          class="cancel"
          @click="$emit('closeModal', false)"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string; isUpdated?: boolean }>();
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: whitesmoke;
  padding: 2em;
  border-radius: 8px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
}

.modal__footer {
  margin-top: auto;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cancel {
  padding: 0.4em 0.8em;
  border-radius: 6px;
  border: 1px solid black;
  background-color: lightsalmon;
  cursor: pointer;
}

.confirm {
  padding: 0.4em 0.8em;
  border-radius: 6px;
  border: 1px solid black;
  cursor: pointer;
  background-color: aquamarine;
}
</style>
