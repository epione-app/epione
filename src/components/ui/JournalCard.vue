<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-divider/>
    <v-card-text>
      <div class="">{{ body }}</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn outline color="accent">Delete Note</v-btn>
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
    timestamp: function() { return this.journal.timestamp; }
  }
};
</script>

