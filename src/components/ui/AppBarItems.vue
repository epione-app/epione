<!-- 
toolbar buttons in the main app bar
should be contextual and relevant
for example: register and login buttons shouldn't be shown when the user is logged in
-->
<template>
  <v-toolbar-items>
    <!-- unauthed users should see these buttons -->
    <v-btn flat to="/auth/login">Login</v-btn>
    <v-btn flat to="/auth/register">Register</v-btn>
    <!-- eos -->

    <!-- authed users should see this on the home screen -->
    <!-- eos -->
  </v-toolbar-items>
</template>

<script>
export default {
  data() {
    return;
  }
};
</script>