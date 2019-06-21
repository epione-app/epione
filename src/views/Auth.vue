<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-1">
            <v-tabs
              centered
              dark
              color="primary"
              slider-color="accent"
              >
              <v-tab :to="{ name: 'login' }" replace>Login</v-tab>
              <v-tab :to="{ name: 'register'}" replace>Register</v-tab>
            </v-tabs>
            <v-scale-transition mode="out-in">
              <router-view></router-view> 
            </v-scale-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  })
};
</script>