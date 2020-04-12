<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      overflow
      floating
    >
      <main-menu />
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
      flat
      extended
      src="/images/background.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>
      <v-spacer />
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn 
            v-on="on"
            icon
            href="https://github.com/nduvieilh/text-eclipse"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </template>
        <span>GitHub</span>
      </v-tooltip>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-content>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MainMenu from '../components/MainMenu';

export default {
  components: {
    'main-menu': MainMenu,
  },
  data: () => ({
    drawer: false, 
  }),
  mounted() {
    if(this.$vuetify.breakpoint.lgAndUp) {
      this.drawer = true;
    }
  },
}
</script>
