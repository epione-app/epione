<template>
  <v-card>
    <v-card-title class="headline">{{ title }}</v-card-title>
    <v-card-text>
      <div class="truncate-text">{{ body }}</div>
    </v-card-text>
    <v-divider/>
    <v-card-actions>
      <span class="caption" color="info">
        Created at: {{ 
          timestamp 
          ? timestamp.toLocaleDateString() + " @ " + timestamp.toLocaleTimeString() 
          : "No timestamp available."
          }}
        </span>
      <v-spacer />
      <v-btn @click="deleteNote" outline color="accent">Delete Note</v-btn>
      <v-btn color="primary">Edit Note</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from 'firebase/app'
import { firestore } from '@/plugins/firebase.js';

export default {
  props: {
    entry: undefined
  },
  computed: {
    ...mapGetters(["user"]),
    id : function() { return this.entry[0]; },
    journal : function() { return this.entry[1]; },

    title: function() { return this.journal.title; },
    body: function() { return this.journal.body; },
    timestamp: function() { 
      return this.journal.timestamp 
      ? new Date(this.journal.timestamp.seconds * 1000) 
      : null; 
    }
  },
  methods: {
    deleteNote: function () {
      var journals = {};
      journals[this.id] = firebase.firestore.FieldValue.delete()
      firestore.collection('users')
      .doc(this.user.uid)
      .set(
        {journals : journals },
        { merge : true }
      )
    },
  },
};
</script>

