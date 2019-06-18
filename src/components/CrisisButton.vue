<template>
  <v-speed-dial
    v-model="fab"
    fixed
    bottom
    right
    direction="top"
    transition="slide-y-reverse-transition"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" large color="info" dark fab>
        <v-icon>fa-hands-helping</v-icon>
        <v-icon>fa-times-circle</v-icon>
      </v-btn>
    </template>
    <v-btn fab dark color="info">
      <v-icon>fa-phone-alt</v-icon>
    </v-btn>
    <v-btn fab dark color="info">
      <v-icon>fa-sms</v-icon>
    </v-btn>
    <v-btn fab dark color="info">
      <v-icon>fa-globe-asia</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  data() {
    return {
      fab: false
    };
  }
};
</script>