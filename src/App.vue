<template>
  <div id="app">
    <h1>App.vue</h1>
    <input type="text" @keydown.enter="add()" v-model="addThis">
    <h3>Todo</h3>
    <span v-for="task in toDoTasks" v-bind:key="task">
      <p>
        {{ task }}
        <button @click="done(task)">X</button>
      </p>
    </span>
    <h3>Done</h3>
    <span v-for="task in doneTasks" v-bind:key="task">
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
      if (this.addThis.length > 0) {
        this.toDoTasks.push(this.addThis);
        this.addThis = "";
      } else {
        console.log("Write someting !");
      }
    },
    done(task) {
      let indexDone = this.toDoTasks.indexOf(task);
      this.doneTasks.push(this.toDoTasks[indexDone]);
      this.toDoTasks.splice(indexDone, 1);
    },
    undone(task) {
      let indexToReAdd = this.doneTasks.indexOf(task);
      this.toDoTasks.push(this.doneTasks[indexToReAdd]);
      this.doneTasks.splice(indexToReAdd, 1);
    },
    remove(task) {
      let indexToReAdd = this.doneTasks.indexOf(task);
      this.doneTasks.splice(indexToReAdd, 1);
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
