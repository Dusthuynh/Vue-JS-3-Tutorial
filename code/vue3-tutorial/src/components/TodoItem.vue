<template>
  <p class="todo-item" :class="todoProps.completed ? 'is-completed' : ''">
    <input
      type="checkbox"
      :checked="todoProps.completed"
      @change="markItemCompleted"
    />
    {{ todoProps.title }}
    <button class="del-btn" @click="deleteItem">Delete</button>
  </p>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todoProps'],
  setup(props, context) {
    const markItemCompleted = () => {
      context.emit('item-completed', props.todoProps.id)
    }

    const deleteItem = () => {
      context.emit('delete-item', props.todoProps.id)
    }

    return {
      markItemCompleted,
      deleteItem
    }
  }
}
</script>

<style>
.todo-item {
  background-color: rgb(228, 228, 228);
  padding: 10px;
  margin: 0;
  border-bottom: 1px #ccc dotted;
}
.del-btn {
  background-color: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
  float: right;
}
.is-completed {
  text-decoration: line-through;
}
</style>
