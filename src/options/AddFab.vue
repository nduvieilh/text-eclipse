<script>
  import { 
    VBtn,
    VSpeedDial,
    VIcon,
  } from 'vuetify/lib';
  import AddStyle from "./AddStyle.vue";

  export default {
    name: 'AddFab',
    components: {
      AddStyle,
      VBtn,
      VSpeedDial,
      VIcon,
    },
    data: () => ({
      fab: false
    })
  };
</script>

<template>
  <v-speed-dial
    v-model="fab"
    :top="false"
    :left="false"
    :bottom="true"
    :right="true"
    direction="top"
  >
    <template v-slot:activator>
      <v-btn
        v-model="fab"
        color="blue darken-2"
        fab
      >
        Options
      </v-btn>
    </template>
    <add-style/>
    <v-btn
      fab
      small
      color="green"
    >
      Add Matches
    </v-btn>
  </v-speed-dial>
</template>

<style lang="scss" scoped>
.v-speed-dial {
  position: absolute;
}
</style>
