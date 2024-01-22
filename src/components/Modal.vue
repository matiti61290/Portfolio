<script setup>
import { defineProps, defineEmits, ref } from "vue";
import {onClickOutside} from '@vueuse/core'

const emit = defineEmits(["modal-close"]);

const target = ref(null)
onClickOutside(target, ()=>emit('modal-close'))

</script>

<template>
  <div class="modal-mask">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <div class="modal-footer">
              <button @click.stop="emit('modal-close')">Retour</button>
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
  background-color: rgba(32, 86, 115, 0.7);
}
.modal-container {
  display: flex;
  flex-direction:column;
  align-items: center;
  height: auto;
  width: 800px;
  margin: 250px auto;
  padding: 20px 30px;
  background-color:#1b1b1b;
  border-radius: 50px;
  box-shadow: 0 10px 10px #1b1b1b;
  gap: 50px;
}

.modal-header{
  background-color: #205673;
  border-radius: 50px;
  width: auto;
  height: auto;
  /* padding: 20px; */
  box-shadow: 0 0 10px 0 #205673;
  text-align: center;
  font-size: 1.7em;
}

.modal-body{
  background-color: #205673;
  border-radius: 50px;
  box-shadow: 0 0 10px 0 #205673;
}

.modal-footer{
  background:none;
}

button{
  color: white;
  font-family: trispace;
  font-size: 1.5em;
  background-color: #205673;
  border-radius: 50px;
  width: 5em;
  height: 2em;
  box-shadow: 0 0 10px 0 #205673;
  border: none;
}

</style>