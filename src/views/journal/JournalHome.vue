<template>
  <v-container grid-list-xl>
    <v-layout align-start justify-center>
      <v-flex xs12 md8 lg6>
        <v-card>
          <v-card-title class="headline">Welcome to the Journal Section</v-card-title>
          <v-card-text>
            <div
              class="body-1"
            >This section has a diary for whatever, can be writing down your feelings, trying to ground yourself, w/e.</div>
            <div
              class="body-1"
            >Following this card is your current entries we've got on hand, feel free to edit them!</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outline color="primary">New Note</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout align-start justify-center>
      <v-flex xs12 md8 lg6>
          <JournalCard class="my-2" v-for="entry in entries" :key="entry[0]" :entry="entry"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JournalCard from '@/components/ui/JournalCard.vue';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userJournals']),
    page: function() {
      return this.$route.params.page || 1;
    },
    entries: function() {
      return Object.entries( this.userJournals );
    }
  },
  methods: {
    createNewNote : function() {
      
    },
  },
  components: {
    JournalCard
  }
};
</script>