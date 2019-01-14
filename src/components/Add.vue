<template>
  <div>
    <input
      type="text"
      @keydown.enter="add()"
      v-model="$store.state.addThis"
      placeholder="Write something..."
      autofocus
    >
  </div>
</template>
<script>
export default {
  methods: {
    add() {
      if (
        this.$store.state.toDoTasks.indexOf(this.$store.state.addThis) > -1 ||
        this.$store.state.addThis.length <= 0
      ) {
        // Pas de saisie
        if (this.$store.state.addThis.length == 0) {
          alert("Write something buddy!");
          // Saisie deja dans la liste
        } else {
          alert(this.$store.state.addThis + " is already in the list!");
        }
        // La saisie est bonne
      } else {
        this.$store.state.toDoTasks.push(this.$store.state.addThis);
        this.$store.state.addThis = "";
      }
    }
  }
};
</script>

<style>
</style>
