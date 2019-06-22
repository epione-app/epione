<!-- Register form for the application -->
<!-- Uses Vuetify form validation with RegEx D: -->
<template>
  <v-card>
    <v-card-text>
      <v-form lazy-validation v-model="valid" ref="form">
        <v-text-field
          solo
          v-model="uname"
          prepend-icon="fa-user-circle"
          name="name"
          label="Name"
          type="text"
          :rules="[v => !!v || 'Please enter your name.']"
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
          :rules="[v => /.+@.+\..+/.test(v) || 'Please enter a valid email.']"
        ></v-text-field>
        <v-text-field
          solo
          v-model="password"
          prepend-icon="fa-key"
          name="password"
          label="Password"
          id="password"
          type="password"
          :rules="[
            v => v.length >= 6 || 'Please enter a password that is 6 characters or more.',
            v => (/[A-Z]/.test(v)) || 'You need a capital letter',
            v => (/[\d]/.test(v)) || 'You need a number',
            v => (/[^a-zA-Z0-9]/.test(v)) || 'You need a special character',
          ]"
        ></v-text-field>
        <v-text-field
          solo
          prepend-icon="fa-key"
          name
          label="Verify Password"
          id="verify_password"
          type="password"
          :rules="[v => this.password == v || 'Your password does not match']"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!valid" @click="createAccount" round color="accent">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { auth } from "@/plugins/firebase.js";

export default {
  data: () => ({
    drawer: null,
    valid: null,
    uname: "",
    email: "",
    password: "",
  }),
  props: {
    source: String
  },
  methods: {
    createAccount: function() {
      if (!this.$refs.form.validate()) { return; }

      const displayName = this.uname;

      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
            alert("User created!");
            auth.currentUser.updateProfile({ displayName })
            .catch(function(error) {
              alert("An error happened: " + error)
            });
        })
        .catch((err) => {
            alert(err.message);
        });
    }
  }
};
</script>