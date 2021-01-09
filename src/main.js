import Vue from 'vue'
import App from './App.vue'
import router from './router'

// bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
    // akhir bootstrap



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')