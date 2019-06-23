<template>
<v-container>
  <v-layout align-center justify-center>
    <v-card class="">
      <v-card-title>
        <v-icon left>fa-book</v-icon>
        {{ entry.title }}
      </v-card-title>
      <v-card-text>
        Journal - Placeholder - {{ id }}
        <v-divider></v-divider>
        Journal Body - {{ entry.body }}
      </v-card-text>
    </v-card>
  </v-layout>
</v-container>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      id: function () { return this.$route.params.id},
      // Wait, woops - I'm getting confused with Entry and JournalCard. JournalCard is component. :3

      ...mapGetters([
        'userJournals',
      ]),
      
      entry: function () {
        let entry = {title: "Error - Entry not found"};
        window.journals = this.userJournals;
        if (this.userJournals && this.userJournals[this.id]) {
          entry = this.userJournals[this.id];
        }
        return entry;
      },
    }
  }
</script>