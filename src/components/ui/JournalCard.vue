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
      <v-btn outline color="accent">Delete Note</v-btn>
      <v-btn color="primary">Edit Note</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    entry: undefined
  },
  computed: {
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
    
  }
};
</script>

