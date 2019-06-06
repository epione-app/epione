import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { firestore as db } from './plugins/firebase.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      dummy : undefined
  },
  getters: {
    "dummy" : (state) => {
      return state.dummy;
    }
  },
  mutations: {
    // other mutations
    ...vuexfireMutations,
  },
  actions: {
    bindDummy : firestoreAction(
      ({ bindFirestoreRef }) => {
        return bindFirestoreRef('dummy', db.collection('dummy'))
      } 
    )
  }
})
