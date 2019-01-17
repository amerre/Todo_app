<template>
  <div id="app">
    <h1>Todos.</h1>
    <div id="wrapper">
      <app-add></app-add>
      <app-nav></app-nav>
      <app-todo v-if="$store.state.show"></app-todo>
      <app-done v-if="$store.state.show"></app-done>
      <router-view></router-view>
    </div>
    <app-credits></app-credits>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import Done from "./components/Done.vue";
import Add from "./components/Add.vue";
import Nav from "./components/Nav.vue";
import Credits from "./components/Credits.vue";

export default {
  components: {
    appTodo: Todo,
    appDone: Done,
    appAdd: Add,
    appNav: Nav,
    appCredits: Credits
  }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
