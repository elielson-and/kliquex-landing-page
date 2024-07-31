import './assets/main.css'
import Aos from 'aos'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'
Aos.init();
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
