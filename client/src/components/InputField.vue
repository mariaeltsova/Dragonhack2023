<template>
  <div class="form-group">
    <label for="exampleInputEmail1">{{ label }}</label>
    <input :type="type" class="form-control" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "InputField",
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
}
</script>
