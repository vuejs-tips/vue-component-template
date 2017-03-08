<template lang="html">
<textarea class="{{ name }}" v-model="editableValue" :maxlength="maxlength"></textarea>
</template>

<script>
export default {
  name: '{{ name }}',
  props: {
    value: {
      type: String,
      default: '',
      required: true
    },

    maxlength: {
      type: Number,
      default: 0,
      required: true
    }
  },

  data () {
    console.log(this.value)
    return {
      editableValue: this.value
    }
  },

  watch: {
    value (newValue) {
      this.editableValue = newValue
    },

    editableValue: {
      immediate: true,
      handler (newValue) {
        this.$emit('input', newValue)
        this.$emit('left-chars', this.leftChars)
      }
    }
  },

  computed: {
    leftChars () {
      return this.maxlength - this.editableValue.length
    }
  }
}
</script>
