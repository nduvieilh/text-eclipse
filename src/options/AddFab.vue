<script>
  import StorageService from '../StorageService';
  import MatchService from '../MatchService';
  import StyleService from '../StyleService';
  import { 
    VBtn,
    VSpeedDial,
    VIcon,
  } from 'vuetify/lib';

  const storageService = new StorageService();

  export default {
    name: 'AddFab',
    components: {
      VBtn,
      VSpeedDial,
      VIcon,
    },
    data: () => ({
      fab: false,
    }),
    methods: {
      addStyle: async function() {
        let results = await storageService.getStyles();
        results.push(StyleService.createStyle());
        await storageService.setStyles(results);
        
        this.fab = false;
      },
      addMatch: async function() {
        let results = await storageService.getMatches();
        results.push(MatchService.createMatch());
        await storageService.setMatches(results);
        
        this.fab = false;
      }
    },
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
    fixed
  >
    <template v-slot:activator>
      <v-btn
        v-model="fab"
        color="accent"
        fab
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      small
      @click="addMatch()"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn
      fab
      small
      @click="addStyle()"
    >
      <v-icon>mdi-format-paint</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
