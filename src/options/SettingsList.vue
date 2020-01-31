<script>
  import StorageService from "../StorageService";
  import StyleCard from './StyleCard';
  import { 
    VRow,
    VCol,
    VDivider,
    VCard,
    VCardTitle,
    VCardText,
    VSheet,
    VIcon,
  } from 'vuetify/lib';
  export default {
    name: 'SettingsList',
    components: {
      VRow,
      VCol,
      VDivider,
      VCard,
      VCardTitle,
      VCardText,
      VSheet,
      VIcon,
      StyleCard,
    },
    mounted() {
      let storageService = new StorageService();
      storageService.getStyles().then(styles => {
        this.styles = styles;
      });
      
      document.addEventListener('storage-changed', function (e) {
        let storageService = new StorageService();
        storageService.getStyles().then(styles => {
          console.log(this.styles);
          this.styles = styles;
        });
      });
    },
    data: () => ({
      fab: false,
      styles: [],
    })
  };
</script>

<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Styles</v-card-title>
          <div v-for="(style, index) in styles"
          :key="index">
            <style-card
              class="pa-4" 
              :style-definition="style"></style-card>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
        >
          <v-card-title> Matches</v-card-title>
          <!-- <div v-for="match in matches">
            <v-card-text>{{match.name}}</v-card-text>
            <v-divider class="mx-4"></v-divider>
          </div> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.v-speed-dial {
  position: absolute;
}
</style>
