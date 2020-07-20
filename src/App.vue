<template>
  <v-app>
    <v-main>
      <BaseTextField :label="firstName" :required="required"></BaseTextField>      
      <BaseTextField :label="lastName"></BaseTextField>      
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseTextField from './components/_base-Text-Field.vue';

export default Vue.extend({
  name: 'App',

  components: {
    BaseTextField
  },

  data: () => ({
    //
    firstName: 'First Name',
    lastName: 'Last Name',
    required: true
  }),
});
</script>
