<template>
  <v-layout>
    <v-speed-dial
      v-model="fab"
      fixed
      bottom
      right
      style="z-index: 5;"
      :style="{ bottom: authed ? '72px' : null }"
      direction="top"
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="primary" dark fab>
          <v-icon>fa-hands-helping</v-icon>
          <v-icon>fa-times-circle</v-icon>
        </v-btn>
      </template>

      <v-btn fab small dark color="info" @click="callModal=true">
        <v-icon>fa-phone-alt</v-icon>
      </v-btn>

      <v-btn fab small dark color="info" @click="smsModal=true">
        <v-icon>fa-sms</v-icon>
      </v-btn>  
      
      <v-btn fab small dark color="info" @click="webModal=true">
        <v-icon>fa-globe-asia</v-icon>
      </v-btn>
    </v-speed-dial>
    
    <v-dialog v-model="callModal" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Call Headline</v-card-title>
        <v-card-text>Body Text</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="callModal = false">Dismiss</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="smsModal" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">SMS Headline</v-card-title>
        <v-card-text>Body Text</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="smsModal = false">Dismiss</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="webModal" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Web Headline</v-card-title>
        <v-card-text>Body Text</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="webModal = false">Dismiss</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      callModal: false,
      smsModal: false,
      webModal: false,
      fab: false
    };
  },
  props: { authed: Boolean }
};
</script>