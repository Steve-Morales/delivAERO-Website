import { createApp } from 'vue'
import App from './App.vue'
// import {createRouter, createWebHashHistory} from "vue-router";

import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

import VueScrollTo from 'vue-scrollto'

const app = createApp(App)

// app.use(router)
app.use(VueTelInput)
app.use(VueScrollTo)
app.mount('#app')
