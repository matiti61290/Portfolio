<script >

</script>

<template>
    <div id="home">
        <a href="#top" id="home_button">
            <img id="home_picture" src="../assets/img/home_icon.png" alt="icone planete">
        </a>
        <nav>
            <a href="#about-me" id="top_menu"><img id="header_icon" src="../assets/img/satellite.png" alt="satellite"> A propos de moi</a>
            <a href="#mes-creations" id="top_menu"><img id="header_icon" src="../assets/img/satellite.png" alt="satellite">Mes creations</a>
            <a href="***" id="top_menu"><img id="header_icon" src="../assets/img/satellite.png" alt="satellite">Contact</a>
        </nav>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@600&display=swap');

#home{
    margin-top: 1.5em;
    margin-left: 1.5em;
    box-sizing: inherit;
    background: none;
}

#home_button{
    width: 6.5em;
    border: 50px;
    height: auto;
    transition: 0.1s;
    margin-right: 2em;
    position: fixed;
    background: none;
}

#home_button:hover{
    width: 9em;
    height: auto;
    transition: 0.4s;
}

#home_picture{
    width: 6.5em;
    height: auto;
    float: left;
    transition: 0.1s;

    background: none;
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
    margin-right: 30em;
    list-style: none;
    border: 50px;
    background: transparent;
    transition: 0.4s;
    gap: 30px;
    padding-left: 10em;
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
    width: 10em;
}

</style>