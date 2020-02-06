<script>
  import StorageService from "../StorageService";
  import StylePanel from './StylePanel';
  import MatchPanel from './MatchPanel';
  import { 
    VRow,
    VCol,
    VIcon,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VInput,
  } from 'vuetify/lib';
  const storageService = new StorageService();

  export default {
    name: 'SettingsList',
    components: {
      VRow,
      VCol,
      VIcon,
      VExpansionPanels,
      VExpansionPanel,
      VExpansionPanelHeader,
      VExpansionPanelContent,
      VInput,
      StylePanel,
      MatchPanel,
    },
    mounted() {
      this.getStyles();
      this.getMatches();
      
      // Register event listeners
      document.addEventListener('styles-changed', this.getStyles);
      document.addEventListener('matches-changed', this.getMatches);
    },
    destroyed() {
      // Deregister event listeners
      document.removeEventListener('styles-changed', this.getStyles);
      document.removeEventListener('matches-changed', this.getMatches);
    },
    methods: {
      matchDescription(match) {
        const style = this.styles.find(style => style.id === match.style) || {};
        return [
          match.active ? "Active" : "Inactive",
          `Style: ${ style.name }`
        ].join(', ');
      },
      getStyles(forceUpdate) {
        storageService.getStyles(forceUpdate).then(styles => {
          this.styles = styles;
        });
      },
      getMatches(forceUpdate) {
        storageService.getMatches(forceUpdate).then(matches => {
          this.matches = matches;
        });
      },
      setStyles() {
        storageService.setStyles(this.styles);
      },
      setMatches() {
        storageService.setMatches(this.matches);
      },
      removeStyle(styleToRemove) {
        this.styles = this.styles.filter(style => style.id !== styleToRemove.id);
        this.setStyles();
      },
      removeMatch(matchToRemove) {
        this.matches = this.matches.filter(match => match.id !== matchToRemove.id);
        this.setMatches();
      },
    },
    data: () => ({
      fab: false,
      styles: [],
      matches: [],
    }),
    filters: {
      join: (strings) => strings.join(', '),
    }
  };
</script>

<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-expansion-panels
          :hover="true"
        >
          <h1>Styles</h1>
          <v-expansion-panel 
            v-for="style in styles"
            :key="style.id"
            >
            <v-expansion-panel-header>
              <div>
                <span :style="style.css">
                  {{style.name}}
                </span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <style-panel 
                :style-definition="style"
                @set-style="setStyles()" 
                @remove-style="removeStyle($event)"
                class="pt-4"></style-panel>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-expansion-panels
          :hover="true"
        >
          <h2>Matches</h2>
          <v-expansion-panel 
            v-for="match in matches"
            :key="match.id"
            >
            <v-expansion-panel-header>
              <v-input
                :messages="matchDescription(match)"
              >
                <div class="text-truncate mr-5">{{match.strings | join}}</div>
              </v-input>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <match-panel 
                :styles="styles"
                :match-definition="match" 
                @set-match="setMatches()"
                @remove-match="removeMatch($event)"
                class="pt-4"
              ></match-panel>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
</style>
