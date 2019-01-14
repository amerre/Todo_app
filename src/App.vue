<template>
  <div id="app">
    <!-- VUEX. A peaufiner
    <h1 v-for="task in tasksToDo" v-bind:key="task">Todo : {{ task }}</h1>
    <br>
    <h1 v-for="task in tasksDone" v-bind:key="task">Done : {{ task }}</h1>
    <br>
    <h1 v-for="task in tasksAdd" v-bind:key="task">Add This : {{ task }}</h1>
    <hr>-->
    <!-- Mettre Todo et Done dans deux components respectifs, pour ensuite permettre d'utiliser vue router et de naviguer entre done et todo. Une fois chose faite commencer le design. -->
    <h1>App.vue</h1>
    <h5>{{ this.$store.state.toDoTasks.length }} items left</h5>
    <input type="text" @keydown.enter="add()" v-model="addThis">
    <!-- TODO -->
    <h3>Todo</h3>
    <span v-for="task in this.$store.state.toDoTasks" v-bind:key="task">
      <p>
        {{ task }}
        <button @click="done(task)">X</button>
      </p>
    </span>
    <!-- DONE -->
    <h3>Done</h3>
    <span v-for="task in this.$store.state.doneTasks" v-bind:key="task">
      <p class="done">
        {{ task }}
        <button @click="undone(task)">Undone</button>
        <button @click="remove(task)">Remove</button>
      </p>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toDoTasks: ["First", "Second"],
      doneTasks: ["doneStuff"],
      addThis: ""
    };
  },
  methods: {
    add() {
      if (this.$store.state.addThis.length > 0) {
        this.$store.state.toDoTasks.push(this.$store.state.addThis);
        this.$store.state.addThis = "";
      }
    },
    done(task) {
      let indexDone = this.$store.state.toDoTasks.indexOf(task);
      this.$store.state.doneTasks.push(this.$store.state.toDoTasks[indexDone]);
      this.$store.state.toDoTasks.splice(indexDone, 1);
    },
    undone(task) {
      let indexToReAdd = this.$store.state.doneTasks.indexOf(task);
      this.$store.state.toDoTasks.push(
        this.$store.state.doneTasks[indexToReAdd]
      );
      this.$store.state.doneTasks.splice(indexToReAdd, 1);
    },
    remove(task) {
      let indexToReAdd = this.$store.state.doneTasks.indexOf(task);
      this.$store.state.doneTasks.splice(indexToReAdd, 1);
    },
    plusTest() {
      this.$store.state.count++;
    }
  },
  computed: {
    tasksToDo() {
      return this.$store.state.toDoTasks;
    },
    tasksDone() {
      return this.$store.state.doneTasks;
    },
    tasksAdd() {
      return this.$store.state.addThis;
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 400px;
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
