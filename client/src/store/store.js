import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// allows you to access your store in all your vue components
export default new Vuex.Store({
  strict: true,
  // this means you can never modify the state unless it's through an action or mutation
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    // global states of our application to keep track of, use them to add to the header or
    // change whats being displayed in the header or sidenav depending on if you're logged in or not
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setToken({ commit }, token) {
      // inside your actions is typically where you do any type of async logic
      commit('setToken', token);
      // calling the mutation with the same name ('setToken') and pass it that token object
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
});
