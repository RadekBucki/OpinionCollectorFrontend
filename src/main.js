import './plugins/axios'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(router).use(axios).mount('#app')
