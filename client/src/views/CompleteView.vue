<script setup>
import SelectMenu from "../components/SelectMenu.vue"
</script>

<template>
  <br />
  <h4 class="text-center">Find the word that fits into both sentences</h4>
  <br />
  <div class="box">
    {{ question1 }}
    {{ question2 }}
  </div>
  <br />
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Answer1"
          aria-label="Answer"
          aria-describedby="basic-addon1"
          v-model="answer1"
        />
      </div>
      <div class="col-3">
        <a href="#"><img src="../assets/arrow-right.png" alt="" srcset="" /></a>
      </div>
    </div>
  </div>
  <br />
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Answer2"
          aria-label="Answer"
          aria-describedby="basic-addon1"
          v-model="answer2"
        />
      </div>
      <div class="col-3">
        <a href="#"><img src="../assets/arrow-right.png" alt="" srcset="" /></a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      question1: "",
      result1: "",
      answer1: "",
      question2: "",
      result2: "",
      answer2: "",
    }
  },
  methods: {
    async getQuestion() {
      const response = await axios.get(
        `http://localhost:9000/api/generateText?word=${"stopped"}&language=${"en"}`
      )
      console.log(response.data)
      this.question1 = response.data.example1[0]
      this.result1 = response.data.example1[1]

      this.question2 = response.data.example2[0]
      this.result2 = response.data.example2[1]
    },
  },
  async beforeMount() {
    await this.getQuestion()
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
img {
  width: 2.7rem;
  height: 2.7rem;
}
</style>
