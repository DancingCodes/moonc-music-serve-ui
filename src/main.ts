import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import 'normalize.css';
import '@/assets/css/font/index.scss'
import '@/assets/css/selection/index.scss'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
app.use(ElementPlus, {
    locale: zhCn,
})

app.mount('#app')

// 代办
// Mock / 自动化测试