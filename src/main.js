import Vue from 'vue'
import App from './App.vue'
import AppFooter from './components/AppFooter.vue'
import appTitle from './appTitle.vue'


Vue.component('app-Footer', AppFooter)
Vue.component('app-title', appTitle)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')