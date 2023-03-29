import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// 引入svg注册脚本
import 'virtual:svg-icons-register';
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('svg-icon', SvgIcon)
app.mount('#app')
