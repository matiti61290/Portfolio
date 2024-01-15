<script setup>

</script>

<template>
    <div id="top_page">
        <nav>
            <router-link id="home" to="/">
            <img id="home_picture" src="../../public/home_icon.png" alt="icone planete">
            </router-link>
            <router-link id="top_menu" to="/aboutMe"><img id="header_icon" src="../../public/satellite.png" alt="satellite"> A propos de moi</router-link>
            <router-link id="top_menu" to="/mesCreations"><img id="header_icon" src="../../public/satellite.png" alt="satellite">Mes creations</router-link>
            <router-link id="top_menu" to="/contact"><img id="header_icon" src="../../public/satellite.png" alt="satellite">Contact</router-link>
        </nav>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@600&display=swap');

#top_page{
    margin-top: 1.5em;
    margin-left: 1.5em;
    box-sizing: inherit;

}

#home{
    width: 6.5em;
    border: 50px;
    height: auto;
    transition: 0.1s;
    margin-right: 2em;
}

#home:hover{
    width: 9em;
    height: auto;
    transition: 0.4s;
}

#home_picture{
    width: 6.5em;
    height: auto;
    float: left;
    transition: 0.1s;
}

#home_picture:hover{
    height: auto;
    width: 9em;
    transition: 0.4s;
}

nav{
    display: flex;
    flex-direction: row;
    height: 100px;
    margin-left: auto;
    margin-right: 30em;
    list-style: none;
    border: 50px;
    background: transparent;
    transition: 0.4s;

    gap: 30px;
}

#header_icon{
    width: 50px;
    filter: invert(100);
    background-color: #20567300;
}

#top_menu{
    background-color: #205673;
    padding: 15px;
    border-radius: 50px;
    transition: 0.3s;


    /* text */
    display: flex;
    align-items: center;
    font-family: 'Trispace';
    font-size: 1.5em;
    color: white;
    width: 10em;
    text-decoration: none;
}

#top_menu:hover{
    background-color: #31305dff;
    transition: 0.3s;
}
</style>