<template>
  <div>
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
  methods: {
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
    }
  }
};
</script>