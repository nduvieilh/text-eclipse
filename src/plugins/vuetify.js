
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
        primary: colors.lightBlue.darken2,
        secondary: colors.blueGrey.darken4,
        accent: colors.amber.base,
      },
    }
  },
  icons: {
    iconfont: 'mdi',
  }
};

export default new Vuetify(opts);