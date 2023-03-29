import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueAnalytics from 'vue-analytics'

const app = createApp(App).mount('#app')
app.use(VueAnalytics, { id: 'G-PP9S90TFH9' })
