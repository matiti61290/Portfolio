<script setup>
// Import components and ref
import { ref } from "vue";
import Modal from "./Modal.vue";
import contactForm from "./contact.vue"

// define visible constants for each modal
const modals = ref({
  cv:{ visible: false },
  cc:{ visible: false },
  comm:{ visible: false}
});

const openModal = (modals) => {
  modals.visible = true;
};

const closeModal = (modals) => {
  modals.visible = false;
}
</script>

<template>
  <main>
    <!-- About me -->
    <div id="about-me">
      <h1><img class="icon" src="../assets/img/about_icon.png" alt="about me icon">A propos de moi</h1>
      <p>Je m'appelle Mathieu Barbey. Je suis un étudiant fraichement diplômé d'un master en science de la Terre et des
        planètes. Durant celui-ci, j'ai pu, au travers
        mes stages, développer un attrait pour la programmation et la modélisation numérique. Suite à l'obtiention de mon
        diplôme,
        j'ai decidé de me lancer dans le développement web au travers de la formation proposée par le CEF.
      </p>
    </div>

    <!-- My creations -->
    <div id="mes-creations">
      <h1><img src="../assets/img/creation_icon.png" alt="" class="my creations icon">Mes créations</h1>
      <div class="creation">

        <div class="creation-detail">
          <h2>Mon CV en HTML</h2>
          <img class="modal-image" @click="openModal(modals.cv)" src="../assets/img/cv.png" alt="">
          <!-- Modal CV -->
          <Modal v-if="modals.cv.visible" @modal-close="closeModal(modals.cv)" name="first-modal">
            <template class="modal" #header>
              <h3>Mon CV en HTML</h3>
            </template>
            <template class="modal" #content>
              <p>Créé le: 2 décembre 2023</p>
              <p>Tech utilisées: HTML 5 et CSS 3</p>
              <p>Repository Github: <a href="https://github.com/matiti61290/CV-HTML-Formation"
                  target="_blank">https://github.com/matiti61290/CV-HTML-Formation</a></p>
            </template>
            <template class="modal" #footer></template>
          </Modal>
        </div>

        <div class="creation-detail">
          <h2>Exemple de cahier des charges</h2>
          <img class="modal-image" @click="openModal(modals.cc)" src="../assets/img/bloc-notes.png" alt="">
          <!-- Modal Cahier des charges -->
          <Modal v-if="modals.cc.visible" @modal-close="closeModal(modals.cc)" name="second-modal">
            <template #header>
              <h3>Exemple de cahier des charges</h3>
            </template>
            <template #content>
              <p>Créé le: 2 décembre 2023</p>
              <p>Lien PDF: <a href="../../public/pdf/cahierDesCharges.pdf" target="_blank">Cahier des charges La
                  Socketterie</a></p>
            </template>
            <template class="modal" #footer></template>
          </Modal>
        </div>

        <div class="creation-detail">
          <h2>Dynamiser un espace commentaire</h2>
          <img class="modal-image" @click="openModal(modals.comm)" src="../assets/img/commentaires.png" alt="">
          <!-- Modal dynamiser un espace commentaire -->
          <Modal v-if="modals.comm.visible" @modal-close="closeModal(modals.comm)" name="third-modal">
            <template #header>
              <h3>Dynamiser un espace commentaire</h3>
            </template>
            <template #content>
              <p>Créé le: 7 janvier 2024</p>
              <p>Tech utilisées: HTML 5, CSS 3 et Javascript ES6</p>
              <p>Lien PDF: <a href="https://github.com/matiti61290/Form-JS-Formation" target="_blank">Exemple
                  de
                  dynamisation d'un espace commentaire</a>
              </p>
            </template>
            <template #footer></template>
          </Modal>
        </div>
      </div>
    </div>

    <!-- Contact form -->
    <div id="Contact">
      <contactForm />
    </div>
  </main>
</template>

<style scoped>

main{
  margin-top: 50px;
  margin-bottom: 50px;
}

#about-me{
  font-family: Trispace;
  color: white;

  margin-left: 100px;
  background-color: #205673;
  padding: 20px 20px 20px 30px;
  border-radius: 50px;
  width: 50%;
  margin-bottom: 50px;
}

#about-me h1{
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: 1s;
}

#about-me:hover h1{
  transition: 1s;
  text-decoration-color: white;
}

.icon{
  margin: 0px;
  float: left;
  padding-right: 10px;
}

#mes-creations{
  background-color: #205673;
  margin: 0 100px 50px 100px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 50px;
  height: auto;
  border-radius: 50px;

  font-family: trispace;
  color: white;
  
}

#mes-creations h1{
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: 1s;
}

#mes-creations:hover h1{
  transition: 1s;
  text-decoration-color: white;
}

.creation-detail{
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center ;
  width: 400px;
}

.creation{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: inherit;
}

.modal-image{
  width: 60px;
  margin-bottom: 30px;
}

#modal-image:hover{
  width: 100px;
  transition: 0.5s;
  cursor: pointer;
  background-color: #31305dff;
  border-radius: 50px;
  padding: 5px 5px;
  box-shadow: 8px 8px 5px 10px #31305dff;
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
  height: 60px;
  font-size: 1.5em;
}

img{
  width: 60px;
  margin-bottom: 30px;
  background-color: inherit;
}

h3{
  background: none;
  width: auto;
  margin: 0.9em;
  text-align: center;
}

p{
  background: none;
  padding: 10px 20px;
  font-size: 1.2em;
}

a{
  text-decoration: none;
  background: none;
  color: white;
  text-decoration: dashed;
}


</style>