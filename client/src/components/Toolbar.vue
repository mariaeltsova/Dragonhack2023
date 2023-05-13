<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    <div class="container-fluid">
      <a href="#" class="navbar-brand"></a>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <!-- Neprijavljen uporabnik -->
        <div class="navbar-nav">
          <a
            href="#"
            class="nav-item nav-link active"
            @click="this.$router.push({ name: 'home' })"
            >Opravila</a
          >
        </div>
        <!-- Neprijavljen uporabnik -->
        <div class="navbar-nav">
          <a
            href="#"
            class="nav-item nav-link active"
            @click="this.$router.push({ name: 'iskanje' })"
            >Iskanje uporabnikov</a
          >
        </div>
        <div class="navbar-nav">
          <a
            href="#"
            class="nav-item nav-link active"
            @click="this.$router.push({ name: 'sledilci' })"
            >Sledilci</a
          >
        </div>
        <!-- Neprijavljen uporabnik -->
        <div class="navbar-nav">
          <a
            href="#"
            class="nav-item nav-link active"
            @click="this.$router.push({ name: 'napaka' })"
            >Prijavi napako</a
          >
        </div>
        <!-- Admin -->
        <!-- Analitik -->
        <!-- Razvijalec  -->
        <!--  -->
        <div class="navbar-nav ms-auto">
          <a
            href="#"
            class="nav-item nav-link"
            @click.prevent="this.$router.push({ name: 'prijava' })"
            >Prijava / odjava</a
          >
        </div>
        <!--  -->
      </div>
    </div>
  </nav>
  <!--  -->
</template>

<style scoped></style>
