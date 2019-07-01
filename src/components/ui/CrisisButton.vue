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
        <v-btn v-model="fab" color="ternary" dark fab>
          <v-icon>fa-hands-helping</v-icon>
          <v-icon>fa-times-circle</v-icon>
        </v-btn>
      </template>

      <v-btn fab small dark color="ternary" @click="callModal=true">
        <v-icon>fa-phone-alt</v-icon>
      </v-btn>

      <v-btn fab small dark color="ternary" @click="smsModal=true">
        <v-icon>fa-sms</v-icon>
      </v-btn>  
      
      <v-btn fab small dark color="ternary" @click="webModal=true">
        <v-icon>fa-globe-asia</v-icon>
      </v-btn>
    </v-speed-dial>
    
    <v-dialog v-model="callModal" persistent max-width="500">
      <v-card color="ternary" dark>
        <v-card-title class="headline">Phone Resources</v-card-title>
        <v-card-text>
          <span class="justify-center title">Need Help?</span>
          <p class="body">
            Here's some web resources that we think will help. <br />
            <strong>
              If you or someone you know is in immediate danger of harming themselves or others,
              please call your local health institution or emergency services.
            </strong>
          </p>
          <ul color="white">
            <!-- NOTE: tel: protocol does not work on web for now -->
            <li><a href="tel:0800543354">Lifeline Phoneline (0800 543 354)</a></li>
            <li><a href="tel:0800376633">Youthline (0800 376 633)</a></li>
            <li><a href="tel:0800726666">Samaritans Phoneline (0800 726 666)</a></li>
            <li><a href="tel:0800111757">The Lowdown (0800 111 757)</a></li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline @click="callModal = false">Dismiss</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="smsModal" persistent max-width="500">
      <v-card color="ternary" dark>
        <v-card-title class="headline">SMS Resources</v-card-title>
        <v-card-text>
          <span class="justify-center title">Need Help?</span>
          <p class="body">
            Here's some SMS helplines that we think are a good fit. <br />
            <strong>
              If you or someone you know is in immediate danger of harming themselves or others,
              please call the emergency services.
            </strong>
          </p>
          <ul>
            <!-- NOTE: sms: protocol does not work on web for now -->
            <li><a href="sms:4357"> Lifeline SMS Hotline (SMS 4357)</a></li>
            <li><a href="sms:5626">The Lowdown SMS Hotline (SMS 5626)</a></li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline @click="smsModal = false">Dismiss</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="webModal" persistent max-width="500">
      <v-card color="ternary" dark>
        <v-card-title class="headline">Web Resources</v-card-title>
        <v-card-text>
          <span class="justify-center title">Need Help?</span>
          <p class="body">
            Here's some web resources that we think will help. <br />
            <strong>
              If you or someone you know is in immediate danger of harming themselves or others,
              please call the emergency services.
            </strong>
          </p>
          <ul>
            <li><a href="https://thelowdown.co.nz/">The Lowdown</a></li>
            <li><a href="https://www.youthline.co.nz/">Youthline</a></li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline @click="webModal = false">Dismiss</v-btn>
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

<!-- scoped style for vue single-file components -->

<style scoped>
a {
  color: #fff;
}
</style>