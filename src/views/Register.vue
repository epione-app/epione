<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-1">
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
				  v-model="pword"
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
              <router-link to="/login" replace>
                <v-btn flat color="info">Login</v-btn>
              </router-link>
              <v-spacer></v-spacer>
              <v-btn @click="createAccount" color="primary">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import auth from 'firebase'

export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
	createAccount: function() {
		auth().signInWithEmailAndPassword(email).then(
			function(user) {
				alert("Account created!");
			},
			function(error){
				alert("Account Creation Failed!" + error.message);
			}
		)
	} 
  },
};
</script>