import { createApp } from 'vue'
import "./style.scss"
import App from './App.vue'
import './samples/node-api'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
