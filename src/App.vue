<template>
  <div id="app">
    <!-- Programmer vue-router -->
    <app-add></app-add>
    <hr>
    <app-todo></app-todo>
    <hr>
    <app-done></app-done>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import Done from "./components/Done.vue";
import Add from "./components/Add.vue";

export default {
  components: {
    appTodo: Todo,
    appDone: Done,
    appAdd: Add
  }
};
</script>

<style lang="scss">
#app {
  width: 400px;
  border: 2px solid black;
  padding: 20px;
  margin: 20px;
  hr {
    border: 0.5px solid grey;
  }
  input {
    width: 100%;
  }
  p {
    border: 0.5px solid black;
    padding: 10px;
    button {
      float: right;
    }
  }
  .done {
    color: rgb(187, 185, 185);
    text-decoration: line-through;
  }
}
</style>
