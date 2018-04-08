var Home = require( './Home.vue').default
var TransitionBox = require('./TransitionBox.vue').default
var Cookie = require('./Cookie.vue').default

var menu=[
    {
        path:'/home',
        name:'Home',
        component:Home
    },
    {
        path:'/transitionbox',
        name:'TransitionBox',
        component:TransitionBox
    },
    {
        path:'/cookie',
        name:'Cookie',
        component:Cookie
    }]

module.exports = menu