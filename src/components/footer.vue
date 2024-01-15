<script setup>
</script>

<template>
    <div id="footer">
        <div>
            <a target="_blank" href="https://github.com/matiti61290"><img id="github" src="../../public/signe-github.png" alt=""></a>
            <a target="_blank" href="https://www.linkedin.com/in/mathieu-barbey-bb0559228/"><img src="../../public/linkedin.png" alt=""></a>
        </div>
        <div>
            <p>Dernière mise à jour le: 15 janvier 2024.</p>
        </div>
    </div>

</template>

<style scoped>
*{
    background-color: #205673;
    color: white;
    font-family: 'Trispace';
}

#footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
    height: 200px;
}

a{
    padding: 10px;
}

img{
    width: 50px;
}
</style>