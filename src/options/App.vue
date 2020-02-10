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
  },
};
</script>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      fixed
      elevate-on-scroll
      scroll-target="#page"
    >
      <v-toolbar-title>Word Eclipse</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content
      class="fill-height"
      fluid
    >
      <v-container id="page">
        <settings-list></settings-list>
        <add-fab></add-fab>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.container {
  max-width: 600px;
}
</style>
