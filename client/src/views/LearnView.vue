<script setup>
import SelectMenu from "../components/SelectMenu.vue"
import FlashCard from "../components/FlashCard.vue"
</script>

<template>
  <h3 class="text-center">Learn your words</h3>
  <br />
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <select-menu :label="'Select mode'" :options="modes"></select-menu>
      </div>
      <div class="col-3">
        <button type="submit" class="btn btn-primary">Begin</button>
      </div>
    </div>
  </div>
  <br />
  <br />
  <flash-card></flash-card>
</template>

<script>
import { modes } from "../util/modes"

export default {
  data() {
    return {
      modes: modes,
    }
  },
}
</script>

