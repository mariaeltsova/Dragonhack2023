<script setup>
import SelectMenu from "../components/SelectMenu.vue"
</script>

<template>
  <br />
  <h4 class="text-center">Find the word that fits into both sentences</h4>
  <br />
  <div class="box">
    Lorem ipsum dolor sit amet, _____ adipisicing elit. Temporibus, nam illum
    iusto fugiat et _____ deserunt! Perferendis facere harum tenetur
  </div>
  <br />
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Answer"
          aria-label="Answer"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="col-3">
        <a href="#"><img src="../assets/arrow-right.png" alt="" srcset="" /></a>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.box {
  border-radius: 25px;
  border: 3px solid #eee;
  padding: 4%;
  background: inherit;
  font-size: 1.3rem;
}
img {
  width: 2.7rem;
  height: 2.7rem;
}
</style>
