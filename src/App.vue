<!-- root element -->
<template>
  <v-app>
    <v-toolbar app >
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Epione;</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <AppBarItems />
    </v-toolbar>
    <v-content>
      <router-view/>
      <CrisisButton/>
    </v-content>
    <BottomNav />
  </v-app>
</template>

<script>
import CrisisButton from "@/components/ui/CrisisButton.vue";
import AppBarItems from "@/components/ui/AppBarItems.vue";
import BottomNav from '@/components/ui/BottomNav.vue'

export default {
  name: "App",
  data() {
    return {
      fab: false
    };
  },
  created: function() {
    this.$store.dispatch("bindDummy");
  },
  components: {
    CrisisButton,
    AppBarItems,
    BottomNav,
  }
};
</script>
