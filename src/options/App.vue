<script>
import '@mdi/font/css/materialdesignicons.css';
import StorageService from '../StorageService';
import AddFab from './AddFab';
import SettingsList from './SettingsList';
import { 
  VApp,
  VAppBar,
  VToolbarTitle,
  VSpacer,
  VSheet,
  VContainer,
  VContent,
} from 'vuetify/lib';
export default {
  name: 'App',
  components: {
    VApp,
    VAppBar,
    VToolbarTitle,
    VSpacer,
    VSheet,
    VContainer,
    VContent,
    AddFab,
    SettingsList,
  }
};
let storageService = new StorageService();
storageService.getStorage('matches').then(matches => {
  console.log(matches);
});
storageService.getStorage('styles').then(styles => {
  console.log(styles);
});
</script>

<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-toolbar-title>Word Eclipse</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content
      class="fill-height"
      fluid
    >
    <!-- <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="600"
    > -->
      <v-container style="height: 1000px;">
        <settings-list></settings-list>
        <add-fab></add-fab>
      </v-container>
    </v-content>
    <!-- </v-sheet> -->

  </v-app>
</template>

<style lang="scss" scoped>
.container {
  max-width: 600px;
}
</style>
