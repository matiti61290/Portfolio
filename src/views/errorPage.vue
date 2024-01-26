<template>
    <div id="error-message">
        <h1 id="error-title">Error 404</h1>
        <p id="error-text">you traveled in another galaxy.</p>
        <p id="error-text">Come back to Earth by clicking in the rocket.</p>
        <RouterLink to="/" id="back_to_home_button">
            <img id="fusee" src="../assets/img/fusee.png" alt="">
        </RouterLink>
    </div>
</template>

<style>

#error-message{
  background-color: #205673;
  font-family: 'Trispace';
  color: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  border-radius: 50px;
}

#error-title{
    background-color: #205673;
}

#error-text{
    background-color: #205673;
}

#back_to_home_button{
    background-color: #205673;
    margin-top: 20px;
}

#fusee{
    width: 150px;
    filter: invert(100);
    background-color: #20567300;
    padding-bottom: 20px;
}

</style>