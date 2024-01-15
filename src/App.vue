<script setup>
  import menuNav from './components/menuNav.vue'
  import bottomPage from './components/footer.vue'
</script>

<template>
      <header>
        <menuNav />
      </header>
      <router-view/>
      <footer>
        <bottomPage />
      </footer>
</template>

<style scoped>

</style>
