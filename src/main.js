// MODULES
import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

// Components
import Todo from "./components/Todo.vue";
import Done from "./components/Done.vue";

// INIT
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

// VUEX STORE
const store = new Vuex.Store({
  state: {
    toDoTasks: ["Second", "First", "Third"],
    doneTasks: ["doneStuff"],
    addThis: "",
    show: true
  }
});

// ROUTER
const routes = [
  { path: "/todo", component: Todo },
  { path: "/done", component: Done }
];
const router = new VueRouter({
  mode: "history",
  routes
});

// VUE INSTANCE
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
