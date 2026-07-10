
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // ← Importante

const app = createApp(App)

app.use(router)   // ← Registrar o router

app.mount('#app')
