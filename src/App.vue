<template>
  <div id="app">
    <h1>Todos.</h1>
    <div id="wrapper">
      <!-- Input bar -->
      <app-add></app-add>
      <!-- Nav bar -->
      <app-nav></app-nav>
      <!-- Todo items -->
      <app-todo v-if="$store.state.show"></app-todo>
      <!-- Done items -->
      <app-done v-if="$store.state.show"></app-done>
      <!-- Only Todo or Done items -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import Done from "./components/Done.vue";
import Add from "./components/Add.vue";
import Nav from "./components/Nav.vue";

export default {
  components: {
    appTodo: Todo,
    appDone: Done,
    appAdd: Add,
    appNav: Nav
  }
};
</script>

<style lang="scss">
@import "./assets/styles/reset.scss";
@import "./assets/styles/background.scss";
@import "./assets/styles/texts.scss";
@import "./assets/styles/transitions.scss";

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
  }
}
</style>
