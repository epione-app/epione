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
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="loginWithEmail" color="primary">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from "firebase";
import auth from "firebase/auth";
export default {
  data: () => ({
    drawer: null,
    email: "",
    pword: "",
  }),
  methods: {
    loginWithEmail: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.pword).then(
        function (user) {
          alert("Succesfully logged in!");
        },
        function (error) {
          alert("Sign in failed: " + error.message);
        },
      )
    },
  }
};
</script>