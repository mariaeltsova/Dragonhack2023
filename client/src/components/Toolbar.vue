<template>
  <nav class="navbar fixed-bottom navbar-light bg-light nav-style">
    &nbsp;
    <a class="nav-link" href="#" @click="this.$router.push({ name: 'learn' })">
      <img src="../assets/card.png" class="profile" alt="" srcset="" />
    </a>
    <a class="nav-link" href="#" @click="this.$router.push({ name: 'topic' })">
      <img src="../assets/document.png" class="profile" alt="" srcset="" />
    </a>
    <a class="nav-link" href="#" @click="this.$router.push({ name: 'puzzle' })">
      <img src="../assets/puzzle.png" class="profile" alt="" srcset="" />
    </a>
    &nbsp;
  </nav>
</template>

<style scoped>
.profile {
  width: 4rem;
  height: 4rem;
}

.nav-style {
  background-color: #f8f9fa !important;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>
