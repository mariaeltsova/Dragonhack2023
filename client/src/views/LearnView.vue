<script setup>
import SelectMenu from "../components/SelectMenu.vue"
import FlashCard from "../components/FlashCard.vue"
</script>

<template>
  <h3 class="text-center">Learn your words</h3>
  <br />

  <div class="container-fluid">
    <div class="row" v-if="startTrue == 0">
      <div class="col">
        <select-menu
          :label="'Select mode'"
          :options="modes"
          @update="
            (newVal) => {
              selectedMode = newVal
            }
          "
        ></select-menu>
      </div>
      <div class="col-3">
        <button type="submit" class="btn btn-primary" @click="start()">
          Begin
        </button>
      </div>
    </div>
  </div>

  <br />
  <br />
  <flash-card v-if="startTrue == 1"></flash-card>
</template>

<script>
import { modes } from "../util/modes"

export default {
  data() {
    return {
      modes: modes,
      selectedMode: 0,
      startTrue: 0,
    }
  },
  methods: {
    start() {
      const game = this.selectedMode
      if (game == 1) {
        this.startTrue = 1
      }
      if (game == 2) {
        this.$router.push({ name: "complete" })
      }
    },
  },
}
</script>
