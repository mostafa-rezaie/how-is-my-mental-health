import Vue from 'vue'
import App from './App.vue'

// vue router
import VueRouter from 'vue-router'
import {routes} from './routes'

// tailwind
import '@/assets/css/tailwind.css'

import '@/assets/css/home.css'
// font awesome
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBrain,faNetworkWired,faUser,faCheck,faLock,faPiggyBank,faUserClock,faHandshake,faRightLong} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faFacebook, faReddit, faInstagram} from '@fortawesome/free-brands-svg-icons'
// library.add(fas);
library.add(faGithub, faFacebook, faReddit, faInstagram);
library.add(faBrain,faNetworkWired,faUser,faCheck,faLock,faPiggyBank,faUserClock,faHandshake,faRightLong)
Vue.component('fas', FontAwesomeIcon)
// axios
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    render: h => h(App),
    router,
    axios
}).$mount('#app')
