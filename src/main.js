// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Home from './Home'
import router from './router'
import layer from 'vue-layer'
import '@/assets/iconfont/iconfont.css'
import '../node_modules/layui-src/src/css/layui.css'
import '../node_modules/layui-src/src/layui.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'swiper/dist/css/swiper.css';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/main.scss'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import './fonts/iconfont.css'
import Api from './components/public/public.js'
Vue.prototype.$Api = Api;
import echarts from 'echarts'
import jsonp from 'jsonp'

//Vue.use(Vuex);
Vue.prototype.$Jsonp = jsonp;
Vue.prototype.$echarts = echarts;

Vue.prototype.$axios = axios;
//Vue.use( axios,layer)
Vue.prototype.$layer = layer(Vue);
Vue.config.productionTip = false

import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

Vue.use(ElementUI, { locale })
/* eslint-disable no-new */
var index = new Vue({
  el: '#hompage',
  router,
  components: { Home },
  template: '<Home/>',
  methods:{
    initFn:function(){
      let that = this;
      this.$Api.message = function(infor="提示信息",type="info"){
        that.$message({
          message: infor,
          type: type,//'warning',//'success',
          center:true,
          duration:1500
        });
      }
    }
  }
})
