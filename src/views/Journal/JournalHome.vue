<template>
<v-container>
  <v-layout align-center justify-center>
    <v-card class="">
      <v-card-title>
        <v-icon>fa-book</v-icon>
      </v-card-title>
      <v-card-text>
        Journal - Placeholder
      </v-card-text>
    </v-card>
  </v-layout>
</v-container>
</template>

<script>
  export default {
    computed: {
      page: function () { return this.$route.params.page || 1},
    }
  }
</script>