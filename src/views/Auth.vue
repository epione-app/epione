<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-1">
            <v-tabs
              v-model="tabs"
              centered
              color="primary"
              slider-color="warning"
              >
              <!-- <v-tab :to="{ name: 'login' }" replace>Login</v-tab>
              <v-tab :to="{ name: 'register'}" replace>Register</v-tab> -->
            </v-tabs>
            <router-view></router-view> 
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
    tabs: [
      { id: 0, name: 'register', route: 'register'},
      { id: 1, name: 'login', route: 'login'},
    ]
  }),
  props: {
  }
};
</script>