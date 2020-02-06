<script>
  import StorageService from '../StorageService';
  import uuidv4 from 'uuid/v4';
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
        results.push({
          id: uuidv4(),
          name: '',
          css: '',
        });
        await storageService.setStyles(results);
        
        this.fab = false;
      },
      addMatch: async function() {
        let results = await storageService.getMatches();
        results.push({
          id: uuidv4(),
          active: true,
          style: "",
          strings: [],
          regex: false,
          case_insensitive: false
        });
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
        Options
      </v-btn>
    </template>
    <v-btn
      fab
      small
      color="green"
      @click="addStyle()"
    >
      Add Style
    </v-btn>
    <v-btn
      fab
      small
      color="green"
      @click="addMatch()"
    >
      Add Matches
    </v-btn>
  </v-speed-dial>
</template>
