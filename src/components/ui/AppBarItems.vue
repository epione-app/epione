<!-- 
toolbar buttons in the main app bar
should be contextual and relevant
for example: register and login buttons shouldn't be shown when the user is logged in
-->
<template>
  <v-toolbar-items>
    <!-- unauthed users should see these buttons -->
    <v-btn flat v-if="!authed" router :to="{ name: 'login' }">Login</v-btn>
    <v-btn flat v-if="!authed" router :to="{ name: 'register' }">Register</v-btn>
    <!-- eos -->
  
    <!-- authed users should see this in the bar -->
    <v-hover v-if="authed">
      <!-- all this code is doing is a hover event to change the icon -->
      <v-btn slot-scope="{ hover }" flat router :to="{ name: 'logout' }">
        Log out 
        <v-icon  right>{{ hover ? "fa-door-open" : "fa-door-closed" }}</v-icon>    
      </v-btn>
    </v-hover>
    <!-- eos -->
  </v-toolbar-items>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  props: [ 
    "authed" 
  ]
};
</script>