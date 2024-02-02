<script>
  import emailjs from '@emailjs/browser';

  // init emailjs with public key
  emailjs.init('1oFyPt_ixXmtaAEqV');

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default {
  // define variables for user mail and for sending success
  data() {
    return {
      formData: {
        user_name: '',
        user_email: '',
        object: '',
        message: ''
      },
    successMessage: false,
    failMessage: false
    }
  },
  methods: {
    // function for send message and control if success or fail
    sendEmail() {
      emailjs.sendForm(serviceId, templateId, this.$refs.form, publicKey)
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.successMessage = true;
            this.formData = {user_name: '', user_email: '', message: ''}
        }, (error) => {
            console.log('FAILED...', error.text);
            this.failMessage = true;
            this.formData = {user_name: '', user_email: '', object:'', message: ''}
        });
    },
  },
}
</script>

<template>
  <div id="contact">
    <h1 id="contact-title"><img src="../assets/img/message_icon.png" alt="">Contact</h1>
    <form ref="form" @submit.prevent="sendEmail">
        <div v-if="successMessage">
          <p>Votre mail est envoyé</p>
        </div>
        <div v-if="failMessage">
          <p>Votre mail n'a pas pu etre envoye</p>
        </div>
        <label>Nom</label>
        <input type="text" name="user_name" v-model="formData.user_name">
        <label>Mail</label>
        <input type="email" name="user_email" v-model="formData.user_email">
        <label>Objet</label>
        <input type="text" name="object" v-model="formData.object">
        <label>Message</label>
        <textarea name="message" v-model="formData.message"></textarea>
        <button type="submit"><img id="button-image" src="../assets/img/message-button.png" alt="">Envoyer</button>
    </form>
  </div>
</template>

<style>
#contact{
  background-color: #205673;
  height: auto;
  margin: 0 100px 0 100px;
  padding: 20px 10px 30px 10px;
  border-radius: 50px;
  
  font-size: 1.2em;
  color: white;
  font-family: Trispace;
}

h1{
  background-color: #205673;
  padding-left: 10px;

  font-size: 2.5em;
}

#contact h1{
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: 1s;
}

#contact:hover h1{
  transition: 2s;
  text-decoration-color: white;
}

img{
  width: 60px;
  background-color: inherit; 
  float: left;
  padding-right: 10px;
}

form{
  background-color: #205673;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label{
  background-color: #205673;
}

input{
  background-color: #8eadbd;
  border-color: black;
  border-radius: 50px;
  width: 40%;
  padding-left: 10px;

  font-family: Trispace;
}

textarea{
  background-color: #8eadbd;
  border-color: black;
  border-radius: 10px;
  height: 15em;
  padding-left: 10px;
  padding-top: 5px;
  
  color: rgb(0, 0, 0);
  font-family: Trispace;
}

button{
  background-color: #205673;
  box-shadow: 0 0 10px 0 #3f6b83;
  border-radius: 50px;
  border-color: black;
  width: 200px;
  margin: auto;
  padding: 10px 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: white;
  font-family: Trispace;
  font-size: 1.2em;
}

#button-image{
  filter: invert(100);
  background-color: #20567300;
}

div{
  background: none;
}

p{
  background: inherit;
}
</style>