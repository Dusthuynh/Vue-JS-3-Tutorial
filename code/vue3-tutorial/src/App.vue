<template>
  <div id="app">
    <HeaderTodo></HeaderTodo>
    <Todos></Todos>
  </div>
</template>

<script>
import HeaderTodo from './components/HeaderTodo.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    HeaderTodo,
    Todos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
