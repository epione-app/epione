import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { firestore as db } from './plugins/firebase.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      user: undefined,
      userDoc: undefined,
  },
  getters: {
    "user": (state) => { return state.user; },
    "userName": (state) => { return state.user == null ? "" : state.user.displayName; },
    "userJournals": (state) => { return state.userDoc ? state.userDoc.journals : undefined },
    // checks if our user document has been loaded, useful for progress spinners :D
    "loaded": (state) => { return !!state.userDoc },
  },
  mutations: {
    setUser : (state, user) => {
      state.user = user;
    },

    // other mutations
    ...vuexfireMutations,
  },
  actions: {
    bindUserDoc : firestoreAction(
      ({ bindFirestoreRef }, userId) => {
        return bindFirestoreRef('userDoc', db.collection('users')
          .doc(userId));
      } 
    ),
    unbindUserDoc : firestoreAction(
      ({ unbindFirestoreRef }) => {
        return unbindFirestoreRef('userDoc');
      }
    ),
    setUser : ({ commit }, user) => { commit('setUser',user); }
  }
})
