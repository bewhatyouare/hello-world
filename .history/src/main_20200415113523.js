
import Vue from 'vue'
import App from './App'
const { GenerateSW } = require('workbox-webpack-plugin')

new GenerateSW()
const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.config.productionTip = false;
  Vue.config.devtools = true;

}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
