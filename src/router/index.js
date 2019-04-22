import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


//Prohibition of modification
var mainRouters = [
  {
    path: '/',
    name: 'mainPage',
    component: (resolve) => {
      return require(['../components/guangzhouProject/mainPage.vue'], resolve)
    },
    children:[
      {
        path: '/',
        name: 'homePage',
        component: (resolve) => {
          return require(['../components/guangzhouProject/homePage/homePage.vue'], resolve)
        },
      },
      {
        path: '/userManager',
        name: 'userManager',
        component: (resolve) => {
          return require(['../components/guangzhouProject/userManager/userManager.vue'], resolve)
        },
        children:[],
      }
    ],
  },
];
//Prohibition of modification
export default new Router({
  routes: mainRouters
})
