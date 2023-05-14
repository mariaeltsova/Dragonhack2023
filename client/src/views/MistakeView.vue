<script setup>
import SelectMenu from "../components/SelectMenu.vue"
</script>

<template>
  <br />
  <h4 class="text-center">Correct a mistake in this sentance</h4>
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
          v-model="mistakeText"
        />
      </div>
      <div class="col-3">
        <a href="#" @click="checkAnswer()"
          ><img
            src="../assets/arrow-right.png"
            alt=""
            srcset=""
            class="img-btn"
        /></a>
      </div>
    </div>
    <br />
    <div class="row" v-if="answerResult == 1">
      <div class="col">
        <img src="../assets/chick.png" class="img-pic" alt="" srcset="" />
      </div>
      <div class="col">
        <span class="double-fnt">You are correct!</span>
      </div>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        @click="this.$router.go(0)"
      >
        Complete another mistake in this sentance
      </button>
    </div>
    <div class="row" v-if="answerResult == 2">
      <div class="col">
        <img src="../assets/sad.png" class="img-pic" alt="" srcset="" />
      </div>
      <div class="col double-fnt">
        <br />
        <br />
        You are wrong...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mistakeText: "adsfjkl;jasdlk;kjf",
      correctText: "asdfjkl;asdfjkl;",
      answerResult: 0,
    }
  },
  methods: {
    checkAnswer() {
      if (this.mistakeText == this.correctText) {
        this.answerResult = 1
      } else {
        this.answerResult = 2
      }
    },
  },
}
</script>

<style scoped>
.box {
  border-radius: 25px;
  border: 3px solid #eee;
  padding: 4%;
  background: inherit;
  font-size: 1.3rem;
}

.img-pic {
  width: 7rem;
  height: 7rem;
}
.img-btn {
  width: 2.7rem;
  height: 2.7rem;
}

.double-fnt {
  font-size: 2rem;
}
</style>
