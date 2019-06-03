import Vue from 'vue'
import * as fb from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import config from '../firebase_conf.json'

// checks if a firebase is already initialised:
// if so will get a ref to the existing service.
// otherwise it will init a new service.
Vue.prototype.$firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app();

export default Vue.prototype.$firebase;
export const auth = fb.auth();
export const firestore = fb.firestore();