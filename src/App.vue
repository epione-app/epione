<!-- root element -->
<template>
  <v-app>
    <v-toolbar app >
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Epione;</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <AppBarItems :authed="authed" />
    </v-toolbar>
    <v-content>
      <v-slide-y-reverse-transition mode="out-in">
        <router-view/>
      </v-slide-y-reverse-transition>
      <CrisisButton :authed="authed"/>
    </v-content>
    <BottomNav :authed="authed"/>
  </v-app>
</template>

<script>
import CrisisButton from "@/components/ui/CrisisButton.vue";
import AppBarItems from "@/components/ui/AppBarItems.vue";
import BottomNav from '@/components/ui/BottomNav.vue';
import { mapGetters } from 'vuex';

// TODO: Remove Debug Lines
import firebase from '@/plugins/firebase.js';

export default {
  name: "App",
  data: () => {
    return {
      fab: false
    };
  },
  computed : {
    authed: function() { return !!this.user; },
    ...mapGetters([
      'user',
      'userName'
    ])
  },
  components: {
    CrisisButton,
    AppBarItems,
    BottomNav,
  }
};
</script>
