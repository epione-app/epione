<template>
<v-container>
  <v-layout align-center justify-center>
    <v-card>
      <v-card-title class="headline">
        Welcome to Epione, {{ userName }}
      </v-card-title>
      <v-card-text>
      </v-card-text>
    </v-card>
  </v-layout>
</v-container>
</template>

<script>
  import firebase from 'firebase/app'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(["userName"])
    }
  }
</script>
