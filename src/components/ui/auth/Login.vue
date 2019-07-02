<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field
          required
          prepend-icon="fas fa-mail-bulk"
          solo
          v-model="email"
          name="email"
          label="Email"
          type="email"
        ></v-text-field>
        <v-text-field
          required
          prepend-icon="fas fa-key"
          solo
          v-model="pword"
          name="password"
          label="Password"
          id="password"
          type="password"
        ></v-text-field>
      </v-form>
      <v-divider />
      <!-- Begin OAuth login buttons -->
      <v-btn @click="loginWithGoogle" dark color="#dd4b39" big block> 
        <v-icon left dark>fab fa-google</v-icon>
        Sign in with Google
      </v-btn>
      <v-btn @click="loginWithFacebook" dark color="#1877f2" big block> 
        <v-icon left fa-facebook>fab fa-facebook</v-icon>
        Sign in with Facebook
      </v-btn>
      <!-- TODO: Twitter OAuth, pending approval-->
      <!-- <v-btn dark color="#1da1f3" big block>  
        <v-icon left fa-facebook>fab fa-twitter</v-icon>
        Sign in with Twitter
      </v-btn> -->
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="loginWithEmail" round color="accent">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { auth } from "@/plugins/firebase.js";
import firebase from "firebase/app";
import router from "@/router.js";

export default {
  data: () => ({
    drawer: null,
    email: "",
    pword: ""
  }),
  methods: {
    loginWithEmail: function() {
      auth.signInWithEmailAndPassword(this.email, this.pword).then((user) => { router.push({name: 'home'}) })
      .catch((error) => {
          alert("Sign in failed: " + error.message);
      })
    },
    loginWithGoogle: function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then((result) => { router.push({name: 'home'}) })
      .catch((error) => {
          alert("Sign in failed: " + error);
      })
    },
    /* 
    breaks with Mozilla's Facebook Container extension, 
    but no privacy-aware person would use Facebook login anyway :D 
    */
    loginWithFacebook: function() {
      const provider = new firebase.auth.FacebookAuthProvider();
      auth.signInWithPopup(provider).then((result) => { router.push({name: 'home'}) })
      .catch((error) => { 
        alert("Sign in failed: " + error) 
        })
    },
  }
};
</script>