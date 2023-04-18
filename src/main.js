import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import routes from '@/router/index'

createApp(App)
    .use(routes)
    .use(ElementPlus)
    .mount('#app')
