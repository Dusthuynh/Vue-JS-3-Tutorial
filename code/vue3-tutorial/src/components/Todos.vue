<template>
  <add-todo @add-todo="addTodo" />
  <todo-item
    v-for="todo in todos"
    :key="todo.id"
    :todoProps="todo"
    @item-completed="markCompleted"
    @delete-item="deleteTodo"
  />
</template>

<script>
import { ref } from 'vue'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Todos',
  components: { TodoItem, AddTodo },
  setup() {
    const todos = ref([
      {
        id: 1,
        title: 'Viec 1',
        completed: false
      },
      {
        id: 2,
        title: 'Viec 2',
        completed: false
      },
      {
        id: 3,
        title: 'Viec 3',
        completed: false
      }
    ])

    const markCompleted = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    }

    const deleteTodo = id => {
      todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const addTodo = newTodo => {
      newTodo.id = todos.value.length + 1
      todos.value.push(newTodo)
    }

    return {
      todos,
      markCompleted,
      deleteTodo,
      addTodo
    }
  }
}
</script>
