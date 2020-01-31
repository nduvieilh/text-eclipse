
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const opts = {
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540
    },
    scrollBarWidth: 24,
  },
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey.darken1,
        secondary: colors.amber.base
      },
      dark: {
        primary: colors.blueGrey.darken1,
        secondary: colors.amber.base
      }
    }
  },
  icons: {
    iconfont: 'mdi',
  }
};

export default new Vuetify(opts);