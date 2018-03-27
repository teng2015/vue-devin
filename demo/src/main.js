import Vue from 'vue'
import App from './App.vue'
// import Home from './Home.vue'
// import TransitionBox from './TransitionBox.vue'



import VueRouter from 'vue-router'
import DevinUi from 'devin-ui'
Vue.use(VueRouter)
Vue.use(DevinUi)

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
