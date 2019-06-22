import '@babel/polyfill'
import Vue from 'vue'
import '@/plugins/vuetify'
import firebase, { auth } from '@/plugins/firebase'
import '@/plugins/vuefire'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Auth event listener (Firebase) 
auth.onAuthStateChanged(function(user) {
  // uses vuex to store the user in the application state
  if (user) { 
    store.dispatch("setUser",user); 
    store.dispatch("bindUserDoc",user.uid) 

    // Check if we can be here
    const requiresAnon = router.currentRoute.matched.some(
      record => record.meta.requiresAnon
    )
    if (requiresAnon) router.push({name: 'home'});
  }
  // on logout sets the user in the application state to null
  else { 
    store.dispatch("setUser",null); 
    router.push('/auth'); 
    store.dispatch("unbindUserDoc");

    // Check if we can be here
    const requiresAuth = router.currentRoute.matched.some(
      record => record.meta.requiresAuth
    )
    if (requiresAuth) router.push({name:'login'});
  }


});
