<template>
  <div>
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-card-text>
        <div class="truncate-text">{{ body }}</div>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <!-- timestamp for note creation, otherwise string will be shown -->
        <span class="caption" color="info">
          Created at: {{ 
            timestamp 
            ? timestamp.toLocaleDateString() + " @ " + timestamp.toLocaleTimeString() 
            : "No timestamp available."
            }}
          </span>
        <v-spacer />
        <v-btn @click="deleteNote" outline color="accent">Delete Note</v-btn>
        <v-btn @click="openEditDialog" color="primary">Edit Note</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="editNoteDialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">Edit Note</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
            required
            solo
            v-model="editTitle"
            name="editTitle"
            label="Change Title"
            type="text"></v-text-field>
            <v-textarea
            required
            outline
            v-model="editBody"
            name="editBody"
            label="Change Entry"
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
            @click="editNoteDialog = false" 
            color="accent">
            Cancel</v-btn>
          <v-btn @click="editNote" color="primary">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from 'firebase/app'
import { firestore } from '@/plugins/firebase.js';

export default {
  data() {
    return {
    editTitle: null,
    editBody: null,
    editNoteDialog: false,
    }
  },
  props: {
    entry: undefined,
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
    openEditDialog: function() {
      this.editTitle = this.title;
      this.editBody = this.body;
      this.editNoteDialog = true;
    },
    editNote: function () {
      firestore.collection('users')
      .doc(this.user.uid)
      .set(
        { 
          journals: {
            [this.id]: {
              title: this.editTitle,
              body: this.editBody,
            }
          }
        },
        { merge : true }
      );

      this.editNoteDialog = false;
    },

  },
};
</script>

