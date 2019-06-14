<template>
  <v-card>
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
      <v-spacer></v-spacer>
      <v-btn @click="login" color="primary">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  methods: {
    login: function() {
      this.$router.replace("home");
    }
  }
};
</script>