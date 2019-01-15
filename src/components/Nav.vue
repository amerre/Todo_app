<template>
  <div class="nav">
    <router-link class="router-link" to="/" @click.native="$store.state.show = true">All</router-link>
    <router-link class="router-link" to="/todo" @click.native="$store.state.show = false">To do</router-link>
    <router-link class="router-link" to="/done" @click.native="$store.state.show = false">Done</router-link>
  </div>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-evenly;
  position: relative;
}
</style>
