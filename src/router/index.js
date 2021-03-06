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
      },
      {
        path: '/siteSafety',
        name: 'siteSafety',
        component: (resolve) => {
          return require(['../components/guangzhouProject/siteSafety/siteSafety.vue'], resolve)
        },
        children:[],
      },
      {
        path: '/materialAcceptance',
        name: 'materialAcceptance',
        component: (resolve) => {
          return require(['../components/guangzhouProject/materialAcceptance/materialAcceptance.vue'], resolve)
        }
      },
      {
        path: '/aiotEnvironment',
        name: 'aiotEnvironment',
        component: (resolve) => {
          return require(['../components/guangzhouProject/aiotEnvironment/aiotEnvironment.vue'], resolve)
        }
      },
      {
        path: '/aiotPage',
        name: 'aiotPage',
        component: (resolve) => {
          return require(['../components/guangzhouProject/aiotPage/aiotPage.vue'], resolve)
        }
      },
      // 塔机监测
      {
        path: '/aiotPageContent',
        name: 'aiotPageContent',
        component: (resolve) => {
          return require(['../components/guangzhouProject/aiotPage/aiotPageContent.vue'], resolve)
        }
      },
      // 监控
      {
        path: '/aiotPageMonitoring',
        name: 'aiotPageMonitoring',
        component: (resolve) => {
          return require(['../components/guangzhouProject/aiotPage/aiotPageMonitoring.vue'], resolve)
        }
      },
      {
        path: '/qualityManage',
        name: 'qualityManage',
        component: (resolve) => {
          return require(['../components/guangzhouProject/qualityManage/qualityManage.vue'], resolve)
        },
        children:[],
      },
{
        path: '/bimApply',
        name: 'bimApply',
        component: (resolve) => {
          return require(['../components/guangzhouProject/bimApply/bimApply.vue'], resolve)
        }
      },
      {
        path: '/manageMachine',
        name: 'manageMachine',
        component: (resolve) => {
          return require(['../components/guangzhouProject/manageMachine/manageMachine.vue'], resolve)
        },
        children:[],
      },
      {
        path: '/productionProgress',
        name: 'productionProgress',
        component: (resolve) => {
          return require(['../components/guangzhouProject/productionProgress/productionProgress.vue'], resolve)
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
