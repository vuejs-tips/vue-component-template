<template lang="html">
<div style="padding-top: 50px">
  <h1>DEMO {{ name }} Vue.js Component</h1>

  <p>
    <{{ name }} v-model="value" :maxlength="40" @left-chars="leftChars = $event"></{{ name }}>
    <strong>\{{ leftChars }}</strong>
  </p>

  <p>
    \{{ value }}
  </p>
</div>
</template>

<script>

import Component from '../src/Component.vue'

export default {
  components: {'{{ name }}': Component},
  data () {
    return {
      value: 'My Input Value',
      leftChars: 0
    }
  }
}
</script>
