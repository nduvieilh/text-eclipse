import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const options = {
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        dark: false,
        themes:  {
            dark: {
                primary: colors.blueGrey.darken4,
                secondary: colors.purple.base,
                accent: colors.green.base,
            }
        }
    }
};

export default new Vuetify(options);