<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-1">
            <v-card-text>
              <v-form>
                <v-text-field
                  required
                  prepend-icon="fas fa-mail-bulk"
                  solo
                  name="login"
                  label="Login"
                  type="email"
                ></v-text-field>
                <v-text-field
                  required
                  prepend-icon="fas fa-key"
                  solo
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <router-link to="/register" replace>
                <v-btn flat color="info">Register</v-btn>
              </router-link>
              <v-spacer></v-spacer>
              <v-btn @click="login" color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    login: function() {
      this.$router.replace('home')
    }
  }
};
</script>