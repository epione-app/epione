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
      <v-btn round dark color="#dd4b39" big block> 
        <v-icon left dark>fab fa-google</v-icon>
        Sign in with Google
      </v-btn>
      <v-btn round dark color="#1877f2" big block> 
        <v-icon left fa-facebook>fab fa-facebook</v-icon>
        Sign in with Facebook
      </v-btn>
      <!-- TODO: Twitter OAuth, pending approval-->
      <v-btn round dark color="#1da1f3" big block disabled> 
        <v-icon left fa-facebook>fab fa-twitter</v-icon>
        Sign in with Twitter
      </v-btn>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="loginWithEmail" round color="accent">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { auth } from "@/plugins/firebase.js";
import router from "@/router.js";

export default {
  data: () => ({
    drawer: null,
    email: "",
    pword: ""
  }),
  methods: {
    loginWithEmail: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.pword).then(
        function (user) {
          router.push({name: 'home'});
          alert("Succesfully logged in!");
        }
      ).catch(
        function (error) {
          alert("Sign in failed: " + error.message);
        }
      )
    }
  }
};
</script>