import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/app.min.css'
import './assets/css/style.css'
import './assets/css/components.css'
import './assets/img/favicon.ico'
import router from "./router";
createApp(App).use(router).mount('#app')
