<template>
  <div class="input-group" @click="$emit('update', returnMarked())">
    <label for="exampleInputEmail1"> {{ label }}</label>
    <div class="form-control box" aria-label="With textarea" readonly>
      <template v-for="(word, index) in splitWords">
        <span
          @mousedown="
            () => {
              markUnmark(index)
            }
          "
          :class="{ markedText: isMarked(index) }"
          >{{ word }}&nbsp;</span
        >
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      marked: [],
    }
  },
  computed: {
    splitWords() {
      return this.text.split(" ")
    },
  },
  methods: {
    markUnmark(index) {
      const iElement = this.marked.indexOf(index)
      // Array already includes element
      // I will unmark it
      if (iElement != -1) {
        this.marked.splice(iElement, 1)
      }
      // Array does not include element
      // I will mark it
      else {
        this.marked.push(index)
      }
    },
    isMarked(index) {
      return this.marked.indexOf(index) != -1
    },
    returnMarked() {
      return this.text.split(" ").filter((el, index) => this.isMarked(index))
      // .replace(/[^a-zA-Z]+/g, "")
    },
  },
  emits: ["submit"],
}
</script>

<style scoped>
.markedText {
  background: red;
  border-radius: 7px;
}

.box {
  overflow-wrap: break-word;
}
</style>
