//入口文件
import Vue from 'vue'


import ElementUI from 'element-ui';  // js组件
import 'element-ui/lib/theme-chalk/index.css'; // 样式

// base.css
import './assets/style/css/base.less'
// iconfont.css
import './assets/style/css/iconfont.css';

import App from './App.vue'
import router from './router'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
