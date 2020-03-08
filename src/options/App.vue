<script>
import '@mdi/font/css/materialdesignicons.css';
import StorageService from '../StorageService';
import AddFab from './AddFab';
import SettingsList from './SettingsList';
import ImportExportService from '../ImportExportService';
import { 
  VApp,
  VAppBar,
  VToolbarTitle,
  VSpacer,
  VSheet,
  VContainer,
  VContent,
  VMenu,
  VIcon,
  VBtn,
  VList,
  VListItem,
  VListItemTitle,
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
    VMenu,
    VIcon,
    VBtn,
    VList,
    VListItem,
    VListItemTitle,
    AddFab,
    SettingsList,
  },
  methods: {
    importJSON: ImportExportService.importJSON,
    exportJSON: ImportExportService.exportJSON,
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
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="importJSON">
            <v-list-item-title>Import</v-list-item-title>
          </v-list-item>
          <v-list-item @click="exportJSON">
            <v-list-item-title>Export</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
