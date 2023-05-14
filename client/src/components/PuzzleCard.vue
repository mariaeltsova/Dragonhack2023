<template>
  <div class="container-fluid">
    <div class="row">
      <h3 class="text-center"><slot></slot></h3>
    </div>
    <div class="row">
      <div class="col">
        <a href="#" @click="checkAnswer(1)">
          <img
            src="../assets/dislike.png"
            :class="{
              rotate: true,
              'clr-fail': colorBad(1),
              'clr-success': colorGood(1),
            }"
            alt=""
            srcset=""
          />
        </a>
      </div>
      <div class="col">
        <a href="#" @click="checkAnswer(2)">
          <img
            src="../assets/woman.png"
            alt=""
            srcset=""
            :class="{
              'clr-fail': colorBad(2),
              'clr-success': colorGood(2),
            }"
          />
        </a>
      </div>
      <div class="col">
        <a href="#" @click="checkAnswer(3)">
          <img
            src="../assets/dislike.png"
            alt=""
            srcset=""
            :class="{
              'clr-fail': colorBad(3),
              'clr-success': colorGood(3),
            }"
          />
        </a>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
export default {
  props: {
    id: {
      required: true,
    },
    answer: {
      required: true,
    },
  },
  data() {
    return {
      correct: 0,
      incorrect: 0,
    }
  },
  methods: {
    checkAnswer(answer) {
      if (this.correct != 0 || this.incorrect != 0) {
        return
      }

      if (this.answer == answer) {
        this.correct = answer
      } else {
        this.incorrect = answer
        this.correct = this.answer
      }

      this.$emit("answear", id, answer)
    },
    colorGood(number) {
      return this.correct == number
    },
    colorBad(number) {
      return this.incorrect == number
    },
  },
}
</script>

<style scoped>
img {
  width: 3.5rem;
  height: 3.5rem;
  margin: auto;
  display: block;
}

.rotate {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

.clr-fail {
  filter: invert(28%) sepia(100%) saturate(7160%) hue-rotate(357deg)
    brightness(103%) contrast(122%);
}

.clr-success {
  filter: invert(53%) sepia(33%) saturate(5433%) hue-rotate(88deg)
    brightness(124%) contrast(121%);
}
</style>
