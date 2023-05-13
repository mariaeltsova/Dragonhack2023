<template>
  <select class="form-select" :aria-label="label">
    <option selected>{{ label }}</option>
    <template v-for="option in options">
      <option :value="option.value" @click="$emit('update', option.value)">
        {{ option.text }}
      </option>
    </template>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  emits: ["update"],
}
</script>
