<template>
<v-container>
  <v-layout align-center justify-center>
    <v-flex xs12 md8 lg6>
    <v-card>
      <v-card-title class="headline">
        Welcome to Epione, {{ userName }}
      </v-card-title>
      <v-card-text>
      </v-card-text>
    </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  import firebase from 'firebase/app'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(["userName"]),
    }
  }
</script>
