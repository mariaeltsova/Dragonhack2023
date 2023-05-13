<template>
  <select class="form-select" :aria-label="label">
    <option selected>{{ label }}</option>
    <template v-for="option in options">
      <option :value="option.code" @click="$emit('update', option.code)">
        {{ option.name }}
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
