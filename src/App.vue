<script setup>
  import menuNav from './components/menuNav.vue'
  import bottomPage from './components/footer.vue'

import { ref } from "vue";
import Modal from "../src/components/Modal.vue";

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};
</script>

<template>
      <header>
        <menuNav />
      </header>
      <main>
        <div>
          <button @click="openModal">Open generic modal</button>
          <Modal :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal">
            <template #content>
              <!-- add content here -->
            </template>
          </Modal>
        </div>
      </main>
      <footer>
        <bottomPage />
      </footer>
</template>

<style scoped>
main{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
