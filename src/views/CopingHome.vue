<template>
<v-container>
  <v-layout justify-center fill-height wrap>
    <!-- custom components to demonstrate modularity -->
    <CopingActivityExample class="ma-1" component_title="IDK" colour="00ffff"/>
    <CopingActivityExample class="ma-1" colour="0cffa1"/>
    <CopingActivityExample class="ma-1" component_title="Breathing" colour="aaddcc"/>
    <CopingActivityExample class="ma-1" colour="aaddcc"/>
    <CopingActivityExample class="ma-1" component_title="Anxiety" colour="aaa"/>
    <CopingActivityExample class="ma-1" colour="ffaa00"/>
  </v-layout>
</v-container>
</template>

<script>
  import CopingActivityExample from '@/components/ui/CopingActivityExample.vue'
  export default {
    components: {
      CopingActivityExample
    }
  }
</script>