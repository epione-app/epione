<template>
  <v-container grid-list-xl>
    <v-layout align-start justify-center>
      <v-flex xs12 md8 lg6>
        <v-card color="primary" dark>
          <v-card-title class="headline" >Welcome to the Journal Section</v-card-title>
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
            <v-btn outline @click="newNoteDialog = true">New Note</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout align-start justify-center>
      <v-flex xs12 md8 lg6>
        <JournalCard class="my-2" v-for="entry in entries" :key="entry[0]" :entry="entry"/>
      </v-flex>
    </v-layout>
    <v-dialog v-model="newNoteDialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">New Note</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
            required
            solo
            v-model="name"
            name="journalTitle"
            label="Journal Title"
            type="text"></v-text-field>
            <v-textarea
            required
            outline
            v-model="entry"
            name="journalEntry"
            label="Entry"
            type="text"
            rows=5
            auto-grow
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            outline 
            @click="newNoteDialog = false" 
            color="accent">
            Cancel</v-btn>
          <v-btn @click="submitNewNote" color="primary">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="text-xs-center">
      <v-pagination 
        round 
        v-model="page" 
        :length="5" 
        @next="this.page + 1" 
        @prev="this.page - 1" 
      />
    </div>
  </v-container>
</template>

<script>
import JournalCard from "@/components/ui/JournalCard.vue";
import firebase from 'firebase/app'
import { firestore }from '@/plugins/firebase.js';
import { mapGetters } from "vuex";

export default {
  data () {
    return {
      newNoteDialog: false,
      name: "",
      entry: "",
      page: 1,
    }
  },
  computed: {
    ...mapGetters(["userJournals", "user"]),
    page: function() {
      return this.$route.params.page || 1;
    },
    entries: function() {
      return this.userJournals ? 
      // pagination change, still wip
      Object.entries(this.userJournals).slice(((this.page - 1) * 6), (this.page * 6)) 
      : [];
    },
  },
  methods: {
    createNewNote: function() {
      this.newNoteDialog = true;
    },
    submitNewNote: function() {
      const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
      const journalId = Date.now();
      // initalising as empty map to dynamically assign key
      var journals = {};
      // setting journal object for pushing to firestore
      journals[journalId] = {
        title: this.name,
        body: this.entry,
        // programmatically set timestamp from firebase server time
        timestamp: timeStamp,
      }
      firestore.collection('users')
      .doc(this.user.uid)
      .set({
        journals
      }, 
        { merge: true }
      )

      this.newNoteDialog = false;
    },
  },
  components: {
    JournalCard
  }
};
</script>