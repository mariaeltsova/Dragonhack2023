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
    @input="(el) => getText(el)"
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
      search: "",
    }
  },
  methods: {
    async getText(el) {
      this.lorem =
        "Commodity Advances Through Banana Improvement Project Research, 1994-1998 G. J. Persley, Pamela George. Box 1 Key technology developments in banana biotechnology"
    },
  },
}
</script>
