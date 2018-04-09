import Vue from 'vue'
import App from './App.vue'
// import Home from './Home.vue'
// import TransitionBox from './TransitionBox.vue'



import VueRouter from 'vue-router'
// import vueDevin from '../dist/vue-devin'
import vueDevin from 'vue-devin'

Vue.use(VueRouter)
Vue.use(vueDevin)

var menu= require('./menu.js')


var router = new VueRouter({
    routes:[
    ...menu,
    {path: '*', redirect: '/home'} // 404
    ]
})


console.log(menu)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
