import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
