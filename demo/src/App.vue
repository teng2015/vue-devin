<template>
  <div id="app">
      <h1>{{ msg }}</h1>
      <h2 style="color:red;">{{decs}}</h2>
        <h3>Essential Links</h3>

    <ul>
      <li v-for="item in menu"><router-link :to="item.name">{{item.name}}</router-link></li>
      
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      menu:require('./menu.js'),
      msg: 'Welcome to Use Devin-Ui',
      decs:'if you like it,please stared me,Thank you!'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
