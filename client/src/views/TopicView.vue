<script setup>
import SelectMenu from "../components/SelectMenu.vue"
import InputField from "../components/InputField.vue"
</script>

<template>
  <select-menu
    :label="'Izberi jezik'"
    :options="languages"
    @update="
      (selected) => {
        language = selected
      }
    "
  ></select-menu>
  <input-field
    :label="'123'"
    :placeholder="'vnosno polje'"
    :type="'password'"
  ></input-field>
</template>

<script>
import { languages } from "../util/languages"

export default {
  data() {
    return {
      languages: languages,
      language: "",
    }
  },
}
</script>
