import './assets/main.css'
import 'element-plus/theme-chalk/display.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 路由切换时，回到顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

const app = createApp(App)

/* 全局注册ElementPlus，统一样式尺寸 */
app.use(ElementPlus, { size: 'small', zIndex: 9000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia())
app.use(router)

app.mount('#app')
