<template>
  <div>
    <h3 v-if="this.$store.state.doneTasks.length > 0">Done</h3>
    <h3 v-else>You did nothing</h3>
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

<style>
.done {
  color: rgb(187, 185, 185);
  text-decoration: line-through;
}
</style>
