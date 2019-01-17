<template>
  <div>
    <h3 v-if="this.$store.state.doneTasks.length > 0">Done</h3>
    <h3 v-else>You did nothing</h3>
    <span class="done" v-for="task in this.$store.state.doneTasks" v-bind:key="task">
      {{ task }}
      <span>
        <button class="btnIcon" @click="undone(task)">
          <i class="fas fa-circle"></i>
        </button>
        <button class="btnIcon" @click="remove(task)">
          <i class="fas fa-trash"></i>
        </button>
      </span>
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
