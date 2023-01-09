import './plugins/axios'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'

import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)
app.use(router).use(axios).mount('#app')
