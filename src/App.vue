<script setup>
import menuNav from './components/menuNav.vue'
import bottomPage from './components/footer.vue'

import { ref } from "vue";
import Modal from "./components/Modal.vue";

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
        <div class="about-me">
            <h1><img class="icon" src="./assets/img/about_icon.png" alt="about me icon">A propos de moi</h1>
            <p>Je m'appelle Mathieu Barbey. Je suis un étudiant fraichement diplômé d'un master en science de la Terre et des planètes au cours duquel j'ai pu ,au travers
              mes stages, développé un attrait pour la programmation et la modélisation numérique. Suite à l'obtiention de mon diplôme,
              j'ai decidé de me lancer dans le développement web au travers de la formation proposée par le CEF.
            </p>
        </div>
        <div class="mes-creations">
          <h1><img src="./assets/img/creation_icon.png" alt="" class="icon">Mes créations</h1>
          <div  class="creation">
            <div class="creation-detail">
              <h2>Mon CV en HTML</h2>
              <img @click="openModal" src="./assets/img/cv.png" alt="">
                  <Modal :isOpen="isModalOpened" @modal-close="closeModal" name="first-modal">
                    <template #header>Custom header</template>
                    <template #content>Custom content</template>
                    <template #footer>Custom content</template>
                  </Modal>
            </div>
            <div class="creation-detail">
              <h2>Exemple de cahier des charges</h2>
              <img @click="openModal" src="./assets/img/bloc-notes.png" alt="">
              <Modal :isOpen="isModalOpened" @modal-close="closeModal" name="first-modal">
                <template #content>
                  <p>Bonjour</p>
                  <p>ca va</p>
                </template>
              </Modal>
            </div>
            <div class="creation-detail">
              <h2>Dynamiser un espace de commentaire</h2>
              <img @click="openModal" src="./assets/img/commentaires.png" alt="">
              <Modal :isOpen="isModalOpened" @modal-close="closeModal" name="first-modal">
                <template #content>
                  <!-- add content here -->
                </template>
              </Modal>
            </div>
          </div>
        </div>
        <div>
          <!-- formulaire d'envoie -->
        </div>
      </main>
      <footer>
        <bottomPage />
      </footer>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@600&display=swap');

main{
  margin-top: 50px;
  margin-bottom: 50px;
}

.about-me{
  font-family: Trispace;
  color: white;
  margin-left: 30px;
  background-color: #205673;
  padding: 20px 20px 20px 30px;
  border-radius: 50px;
  width: 50%;
  margin-bottom: 50px;
}

.icon{
  margin: 0px;
  float: left;
  padding-right: 10px;
}

.mes-creations{
  background-color: #205673;
  padding-top: 10px;
  padding-left: 10px;
  height: 330px;
  font-family: trispace;
  color: white;
  border-radius: 50px;
}

.creation-detail{
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.creation{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: inherit;
}

h1{
  background-color: #205673;
  width: auto;
  font-size: 2.5em;
  padding-left: 10px;
  padding-top: 20px;
  border-radius: 50px;
}

h2{
  background-color: #205673;
  font-size: 1.5em;
}

img{
  width: 60px;
  margin-bottom: 30px;
  background-color: inherit; 
}

p{
  background-color: #205673;
  padding: 10px 20px;
}


</style>
