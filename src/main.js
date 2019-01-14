import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    toDoTasks: ["Second", "First", "Third"],
    doneTasks: ["doneStuff"],
    addThis: ""
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
