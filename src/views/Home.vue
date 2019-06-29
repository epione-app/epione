<template>
<v-container>
  <v-layout align-center justify-center>
    <v-flex xs12 md8 lg6 pa-2>
    <v-card dark color="accent">
      <v-card-title class="headline font-weight-black"  >
        <!-- get first name, usually split by spaces, otherwise
        it'll be the whole name. -->
        Welcome to Epione
        {{ 
          userName 
          ? ", " + userName.split(' ')[0] 
          : "" 
        }}!
      </v-card-title>
      <v-card-text>
        <div class="body-1">
          This is the minimum viable product for our Hot Topic in Software project! <br />
          Still very broken, still very WIP <br />
          Our core functionalities made it in in time though! :D <br />
          Plz no judge :(
        </div>
      </v-card-text>
    </v-card>
    </v-flex >
  </v-layout>
  <v-layout align-center justify-center> 
    <v-flex xs12 md8 lg6 pa-2>
      <v-card dark color="info">
        <v-card-title class="headline justify-center font-weight-bold">
          Journal Count
          </v-card-title>
        <v-card-text class="body justify-center font-weight-light-italic">
          {{
            // is userJournals truthy? ie: exists or has a value
            this.userJournals ? Object.keys(this.userJournals).length : 0
          }}
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
      ...mapGetters(["userName", "userJournals"]),
    }
  }
</script>
