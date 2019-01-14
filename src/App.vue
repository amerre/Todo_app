<template>
  <div id="app">
    <h1>App.vue</h1>
    <input type="text" @keydown.enter="addTask" v-model="addThis">
    <p v-for="task in tasks" v-bind:key="task">{{ task }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: ["do this", "to dhis", "do lol"],
      addThis: ""
    };
  },
  methods: {
    addTask() {
      if (this.addThis.length > 0) {
        this.tasks.push(this.addThis);
      }
      this.addThis = "";
    }
  }
};
</script>

<style lang="scss">
</style>
