<template>
  <div>
    <h3
      v-if="this.$store.state.toDoTasks.length > 0"
    >Todo - {{ this.$store.state.toDoTasks.length }} items left</h3>
    <h3 v-else>Nothing to do</h3>
    <transition-group name="slide-todo" tag="div">
      <span v-for="task in this.$store.state.toDoTasks" v-bind:key="task" class="todo">
        {{ task }}
        <button class="btnIcon" @click="done(task)">
          <i class="far fa-circle"></i>
        </button>
      </span>
    </transition-group>
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