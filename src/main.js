import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import 'bootstrap'
//se lo importo per sovrascriverlo nel general.scss
// allora la riga 8 posso non scriverlo qui
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).mount('#app')
