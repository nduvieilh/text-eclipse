import Vue from 'vue';
import App from './App';
import vuetify from '../plugins/vuetify';

global.browser = require('webextension-polyfill');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  vuetify: vuetify
});
