// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

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
