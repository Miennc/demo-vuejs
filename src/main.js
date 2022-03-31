import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.filter('to-UpperCase',(value)=>{
  return value.toUpperCase();
})