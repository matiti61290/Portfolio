<script>
  import emailjs from '@emailjs/browser';
  import {ref} from "vue"

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default {
  data() {
    return {
    checkMessage: false
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm(serviceId, templateId, this.$refs.form, publicKey)
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.checkMessage = true;
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    },
  },
}
</script>

<template>
  <div id="contact">
    <h1 id="contact-title"><img src="../assets/img/message_icon.png" alt="">Contact</h1>
    <form ref="form" @submit.prevent="sendEmail">
        <div v-if="checkMessage">
          <p>Success</p>
        </div>
        <label>Name</label>
        <input type="text" name="user_name">
        <label>Email</label>
        <input type="email" name="user_email">
        <label>Message</label>
        <textarea name="message"></textarea>
        <button type="submit"><img id="button-image" src="../assets/img/message-button.png" alt="">Envoyer</button>
    </form>
  </div>
</template>

<style>
#contact{
  background-color: #205673;
  height: auto;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 30px;
  color: white;
  font-family: Trispace;
  border-radius: 50px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.2em;
}

h1{
  background-color: #205673;
  font-size: 2.5em;
  padding-left: 10px;
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
  font-family: Trispace;
  padding-left: 10px;
}

textarea{
  background-color: #8eadbd;
  border-color: black;
  border-radius: 10px;
  height: 15em;
  font-family: Trispace;
  padding-left: 10px;
  padding-top: 5px;
  color: rgb(0, 0, 0);
}

button{
  background-color: #205673;
  box-shadow: 0 0 10px 0 #3f6b83;
  border-radius: 50px;
  border-color: black;
  width: 200px;
  margin: auto;
  color: white;
  font-family: Trispace;
  padding: 10px 10px;
  font-size: 1.2em;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#button-image{
  filter: invert(100);
  background-color: #20567300;
}

</style>