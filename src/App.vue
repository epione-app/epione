<template>
  <v-app>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
          <span class="font-weight-light">Epione;</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <CrisisButton />
 </v-app>
</template>

<script>
import CrisisButton from '@/components/CrisisButton.vue'

export default {
  name: 'App',
  data () {
    return {
      fab: false
    }
  },
  created : function () {
    this.$store.dispatch("bindDummy");
  },
  components: {
    CrisisButton
  }
}
</script>
