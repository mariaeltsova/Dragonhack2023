<template>
  <h3 class="text-center">{{ keyword }}</h3>
  <br />
  <button
    type="button"
    class="btn btn-primary btn-lg btn-block btn-full"
    @click="isAnswered = true"
  >
    Check me
  </button>

  <div class="continer-fluid">
    <br />
    <div v-if="isAnswered">
      {{ solution }}
    </div>
    <br />
    <br />
    <div class="row">
      <div class="col-3">
        <button type="button" class="btn btn-primary btn-circle">&lt;</button>
      </div>
      <div class="col"></div>
      <div class="col-3">
        <button type="button" class="btn btn-primary btn-circle">&gt;</button>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAnswered: false,
    }
  },
  param: {
    keyword: String,
    solution: String,
  },
}
</script>

<style>
.btn-full {
  width: 100%;
}
.btn-circle {
  border-radius: 50px;
  padding: 1.5rem;
}
</style>
