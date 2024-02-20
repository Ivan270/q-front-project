import './assets/main.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'
// import '@formkit/themes/genesis'


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { plugin, defaultConfig } from '@formkit/vue'
import config from './formkit.config';
import Ripple from 'primevue/ripple';
import ToastService from 'primevue/toastservice';

import App from '@/App.vue';
import router from './router';
const pinia = createPinia();
// This way Pinia shows up in Vue devtools
createApp(App).directive('ripple', Ripple).use(pinia).use(router).use(PrimeVue, {
  ripple: true
}).use(ToastService).use(plugin, defaultConfig(config)).mount('#app')
