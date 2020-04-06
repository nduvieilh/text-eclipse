// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from './vuetify';
import DefaultLayout from '~/layouts/Default';
import ContainerCard from '~/components/ContainerCard';

export default function (Vue, { router, head, isClient, appOptions }) {
  appOptions.vuetify = Vuetify;
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('ContainerCard', ContainerCard);
}
