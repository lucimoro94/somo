import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire } from 'vuefire'
import { firebaseApp } from '@/firebase.js'

import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [],
  })

app.mount('#app')
