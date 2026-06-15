import { createApp } from 'vue'
import './assets/css/style.css'
import './assets/css/navbar.css'
import './assets/css/hero.css'
import './assets/css/about.css'
import './assets/css/training.css'
import './assets/css/contact.css'
import './assets/css/footer.css'
import './assets/css/login.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
