<template>
  <br />
  <button type="button" class="btn btn-primary btn-lg btn-block" @click="">
    Correct a mistake
  </button>
  <br />
  <br />
  <button
    type="button"
    class="btn btn-primary btn-lg btn-block"
    @click="this.$router.push({ name: 'complete' })"
  >
    Complete a word in sentance
  </button>
  <br />
  <br />
  <button
    type="button"
    class="btn btn-primary btn-lg btn-block"
    @click="this.$router.push({ name: 'puzzle' })"
  >
    Solve the puzzle
  </button>
</template>

<style scoped>
button {
  width: 100%;
}
</style>
