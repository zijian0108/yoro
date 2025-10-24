import App from './App'
import router from './router'
import { createApp } from 'vue'
import './static/stylesheets/index.scss'

const app = createApp(App)

app.use(router)

router.isReady().then(() => {
  app.mount('#root')
})
