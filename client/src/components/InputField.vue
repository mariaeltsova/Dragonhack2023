<template>
  <div class="form-group">
    <label for="exampleInputEmail1">{{ label }}</label>
    <input
      :type="type"
      v-model="input"
      class="form-control"
      :placeholder="placeholder"
      @mousedown="$event('input', input)"
    />
  </div>
</template>

<script>
export default {
  name: "InputField",
  data() {
    return {
      input: "",
    }
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  emits: ["input"],
}
</script>
