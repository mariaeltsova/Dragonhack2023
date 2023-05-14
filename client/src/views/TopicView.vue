<script setup>
import SelectMenu from "../components/SelectMenu.vue"
import InputField from "../components/InputField.vue"
import TextArea from "../components/TextArea.vue"
</script>

<template>
  <select-menu
    :label="'Choose language'"
    :options="languages"
    @update="
      (selected) => {
        language = selected
      }
    "
  ></select-menu>
  <br />
  <select-menu
    :label="'Select diffculty'"
    :options="difficulties"
    @update="
      (selected) => {
        difficulty = selected
      }
    "
  ></select-menu>
  <br />
  <input-field
    :label="''"
    :placeholder="'Enter the topic'"
    :type="'input'"
  ></input-field>

  <br />

  <text-area
    :label="'Mark the words that you don\'t understand - they will be added to your vocabulary'"
    :text="lorem"
    @update="
      (el) => {
        markedWords = el
      }
    "
  ></text-area>

  <br />
  <button type="submit" class="btn btn-primary float-end">Save words</button>
</template>

<script>
import { languages } from "../util/languages"
import { diffuculties } from "../util/difficulties"
import axios from "axios"

export default {
  data() {
    return {
      languages: languages,
      language: "",
      difficulties: diffuculties,
      difficulty: "",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      markedWords: [],
    }
  },
  methods: {
    async getText() {
      const response = await axios.get(
        "https://baconipsum.com/api/?type=meat-and-filler"
      )
      this.lorem = response.data[0]
    },
  },
}
</script>
