<template>
  <div id="app">
    <h1>App.vue</h1>
    <input type="text" @keydown.enter="addTask" v-model="addThis">
    <span v-for="task in tasks" v-bind:key="task">
      <p>
        {{ task }}
        <button @click="remThis(task)">X</button>
      </p>
    </span>
    <span v-for="task in done" v-bind:key="task">
      <p class="done">{{ task }}</p>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: ["First", "Second"],
      done: ["doneStuff"],
      addThis: ""
    };
  },
  methods: {
    addTask() {
      if (this.addThis.length > 0) {
        this.tasks.push(this.addThis);
      }
      this.addThis = "";
    },
    remThis(event) {
      let indexToRemove = this.tasks.indexOf(event);
      this.done.push(this.tasks[indexToRemove]);
      this.tasks.splice(indexToRemove, 1);
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 200px;
  input {
    width: 100%;
  }
  p {
    color: red;
    button {
      float: right;
    }
  }
  .done {
    color: black;
    text-decoration: line-through;
  }
}
</style>
