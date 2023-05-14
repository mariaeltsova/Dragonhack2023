<script setup>
import Toolbar from "./components/Toolbar.vue"
import TopBar from "./components/TopBar.vue"
</script>

<template>
  <top-bar></top-bar>
  <div class="lining">
    <RouterView></RouterView>
  </div>

  <toolbar></toolbar>

  <!--  -->
</template>

<style scoped>
.lining {
  margin: 5%;
}
</style>
