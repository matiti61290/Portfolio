<script setup>

</script>

<template>
    <div id="top_page">
        <a href="../../index.html"><img id="home_picture" src="../../public/home_icon.png" alt="icone planete"></a>
        <nav>
            <li><a id="top_menu" href="" i><img id="header_icon" src="../../public/satellite.png" alt="satellite"> A propos de moi</a></li>
            <li><a id="top_menu" href=""><img id="header_icon" src="../../public/satellite.png" alt="satellite"> Mes creations</a></li>
            <li><a id="top_menu" href=""><img id="header_icon" src="../../public/satellite.png" alt="satellite"> Contact</a></li>
        </nav>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@600&display=swap');

#top_page{
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
    align-items: center;
}

#home_picture{
    width: 60px;
    float: left;
    margin-right: 40px;
}

nav{
    display: flex;
    flex-direction: row;
    margin-right: 400px;
    list-style: none;
}

li{
    padding-left: 20px;
}

a{
    text-decoration: none;
    font-family: 'Trispace';
    font-size: 1.5em;
    color: white;
    display: flex;
    align-items: center;
}

#header_icon{
    width: 50px;
    filter: invert(100);
    background-color: #20567300;
}

#top_menu{
    background-color: #205673;
    padding: 10px;
    border-radius: 50px;
}
</style>