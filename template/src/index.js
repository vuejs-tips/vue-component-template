// need to use require instead of import (changes from babel 5 to 6)
const Component = require('./Component.vue')
module.exports = Component

Component.install = Vue => Vue.component(Component.name, Component)
Component.version = proccess.env.VERSION

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Component)
}
