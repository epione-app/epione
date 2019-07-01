<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 md8 lg4 pa-2>
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
              <strong>
                This is not medical help, only advice on how to cope.
                if you require medical assistance, 
                please visit your local heath service.
              </strong>
            </div>
          </v-card-text>
        </v-card>
      </v-flex >
    </v-layout>
    <v-layout justify-center> 
      <v-flex xs12 md8 lg4 pa-2>
        <v-card dark color="info" height="100%">
          <v-card-title class="headline justify-center font-weight-bold">
            Journal Count
            </v-card-title>
          <v-card-text class="body font-weight-light-italic">
            You have 
            {{
              // is userJournals truthy? ie: exists or has a value
              this.userJournals ? Object.keys(this.userJournals).length : 0
            }}
            journal entries saved.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md8 lg4 pa-2>
        <v-card height="100%">
          <v-card-title class="headline justify-center font-weight-bold">
            Like our app?
          </v-card-title>
          <v-card-text>
            Feel free to contribute your own functionality to our application with a Vue component! <br />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              href="https://github.com/epione-app/epione" 
              color="primary"
            >
              <v-icon left>fab fa-github-square</v-icon>
              <span>Fork us</span>
            </v-btn>
          </v-card-actions>
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
