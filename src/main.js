import Vue from 'vue';
import App from './App.vue';
import test from './utils';

test();
// eslint-disable-next-line no-new
new Vue({
  el: 'body',
  components: { App },
});
