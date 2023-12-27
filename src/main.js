import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import setAuthToken from './utils/setAuthToken'

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
// import '@vuepic/vue-datepicker/dist/vue-datepicker.css'

// import VCalendar from 'v-calendar';
// import 'v-calendar/style.css';

import TextClamp from 'vue3-text-clamp';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import './assets/tailwind.css';
import 'vuetify/styles';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';

import router from './router';
import store from './store';

import { createI18n } from 'vue-i18n'

import { languages } from '../lang/index.js'
const messages = Object.assign(languages)

// import vSelect from "vue-select";
// import "vue-select/dist/vue-select.css";

if(localStorage.token) {
    setAuthToken(localStorage.token);
}

window.addEventListener('beforeunload', () => {
    setAuthToken(store.state.Auth.token);
});

const vuetify = createVuetify({
    components,
    directives,
});
const baseUrl = 'http://18.209.133.159:3096/';  

const app = createApp(App)
app.config.globalProperties.$baseUrl = baseUrl;
app.config.productionTip = false;

const i18n = new createI18n({
    locale: store.state.Configuration.selected_language,
    messages,
})
// .use(VueI18n)

app.component('font-awesome-icon', FontAwesomeIcon)
    // .component("v-select", vSelect)
    .use(VueSidebarMenu)
    .use(i18n)
    .use(TextClamp)
    .use(Vue3Toastify, { autoClose: 3000, })
    .use(store)
    .use(router)
    .use(vuetify)
    // .use(VCalendar, {})
    .component('VueDatePicker', VueDatePicker)
    .mount('#app')
