<script setup>

</script>

<template>
    <div id="top_page">
        <a href="../../index.html"><img id="home_picture" src="../../public/home_icon.png" alt="icone planete"></a>
        <nav>
            <li><a id="top_menu" href="" i>A propos de moi</a></li>
            <li><a id="top_menu" href="">Mes creations</a></li>
            <li><a id="top_menu" href="">Contact</a></li>
        </nav>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@600&display=swap');

#top_page{
    margin-top: 20px;
    margin-left: 20px;
}

#home_picture{
    width: 60px;
    float: left;
}

nav{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    /* margin-right: 400px; */
    padding-top: 15px;
    list-style: none;
}

a{
    text-decoration: none;
    font-family: 'Trispace';
    font-size: 1.5em;
    color: white;
}

#top_menu{
    background-color: #205673;
    padding: 10px;
    border-radius: 50px;
}
</style>