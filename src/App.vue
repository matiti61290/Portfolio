<script setup>
import menuNav from './components/menuNav.vue'
import bottomPage from './components/footer.vue'
</script>

<template>
  <menuNav />
  <RouterView/>
  <bottomPage />
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@600&display=swap');

</style>
