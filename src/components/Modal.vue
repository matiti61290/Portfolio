<script setup>
import { defineProps, defineEmits, ref } from "vue";
import {onClickOutside} from '@vueuse/core'

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

// const target = ref(null)
// onClickOutside(target, ()=>emit('modal-close'))

</script>

<template>
  <div v-if="isOpen" class="modal-mask" @click.self="emit('modal-close')">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header">
            Default
          </slot>
        </div>
        <div class="modal-body">
          <slot name="header">
            Default
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <div>
              <button @click.stop="emit('modal-close')">Submit</button>
            </div>
          </slot>
          </div>
      </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(179, 0, 0);
}
.modal-container {
  width: 300px;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgb(61, 255, 61);
}

</style>