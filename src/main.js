import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 应用实例必须在调用了.mount()方法后才会渲染出来，它的返回值是根组件实例而非应用实例
createApp(App).mount('#app')
