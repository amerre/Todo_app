<template>
  <div id="app">
    <h1>Todos.</h1>
    <div id="wrapper">
      <!-- Programmer vue-router -->
      <app-add></app-add>
      <app-todo></app-todo>
      <app-done></app-done>
    </div>
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
@import "./assets/reset.css";
@import "./assets/background.css";
@import "./assets/texts.css";

#app {
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  display: flex;
  #wrapper {
    background-color: white;
    width: 450px;
    padding: 20px;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    button {
      float: right;
    }
  }
}
</style>
