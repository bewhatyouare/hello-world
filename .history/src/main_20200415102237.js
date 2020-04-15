
import Vue from 'vue'
import App from './App'

const install = function(Vue, config = {}) {
  console.info(Vue);
  if (install.installed) return;
  Vue.config.productionTip = false;
  Vue.config.devtools = true;

}
console.info(window.Vue);
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
