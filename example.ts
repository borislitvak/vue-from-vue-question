import Vue from 'vue'
import App from './App.vue'



// // mount
// new Vue({
//   el: '#vue-tables-options',
//   render: h => h(TableExample, {
//     props: { propMessage: 'World' }
//   })
// })


// mount
new Vue({
  el: '#app',
  render: h => h(App, {
    props: { propMessage: 'World' }
  })
})
