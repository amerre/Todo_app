<template>
  <div>
    <h3>Todo - {{ this.$store.state.toDoTasks.length }} items left</h3>
    <span v-for="task in this.$store.state.toDoTasks" v-bind:key="task">
      <p class="todo">
        {{ task }}
        <button @click="done(task)">X</button>
      </p>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    done(task) {
      let indexDone = this.$store.state.toDoTasks.indexOf(task);
      this.$store.state.doneTasks.push(this.$store.state.toDoTasks[indexDone]);
      this.$store.state.toDoTasks.splice(indexDone, 1);
    }
  }
};
</script>
