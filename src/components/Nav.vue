<template>
  <div class="nav">
    <router-link class="router-link" to="/todoapp" @click.native="$store.state.show = true">All</router-link>
    <router-link
      class="router-link"
      to="/todoapp/todo"
      @click.native="$store.state.show = false"
    >To do</router-link>
    <router-link
      class="router-link"
      to="/todoapp/done"
      @click.native="$store.state.show = false"
    >Done</router-link>
  </div>
</template>

<script>
export default {};
</script>
