<!-- Register form for the application -->
<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field
          solo
          v-model="uname"
          prepend-icon="fa-user-circle"
          name="name"
          label="Name"
          type="text"
        ></v-text-field>
        <v-text-field
          solo
          v-model="email"
          required
          prepend-icon="fa-mail-bulk"
          name="email"
          label="Email"
          id="email"
          type="email"
        ></v-text-field>
        <v-text-field
          solo
          v-model="password"
          prepend-icon="fa-key"
          name="password"
          label="Password"
          id="password"
          type="password"
        ></v-text-field>
        <v-text-field
          solo
          v-model="verify_pword"
          prepend-icon="fa-key"
          name
          label="Verify Password"
          id="verify_password"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="createAccount" color="primary">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from "firebase";
import auth from "firebase";

export default {
  data: () => ({
    drawer: null,
    email: "",
    password: ""
  }),
  props: {
    source: String
  },
  methods: {
    createAccount: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("User created!");
          },
          function(err) {
            alert(err.message);
          }
        );
    }
  }
};
</script>