import Vue from 'vue'
import Router from 'vue-router'

// 登陆
const login = () => import("@/views/login/index")

// 布局
const home = () => import("@/views/home");

// 周报管理
const weeklyTemplate = () => import("@/views/weeklyView/template");
const weeklyView = () => import("@/views/weeklyView/index");
// 写当前周
const writeWeekly = () => import("@/views/writeWeekly/index");
//历史周报
const weeklyList = () => import("@/views/weeklyList/index");

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      isNest: false,
      meta: {
        zhName: '登陆',
        key: '0'
      },
      component: login
    }, {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/writeWeekly',
      meta: {
        zhName: '业务',
        key: '1'
      },
      children: [{
        path: '/weeklyManage',
        name: 'weeklyManage',
        isNest: true,
        icon: 'el-icon-menu',
        component: weeklyTemplate,
        meta: {
          zhName: '周报管理',
          key: '1-0',
          role: 3
        },
        children: [{
          path: '/weeklyManage/weeklyView',
          name: 'weeklyView',
          isNest: false,
          component: weeklyView,
          meta: {
            zhName: '周报预览'
          }
        }]
      }, {
        path: '/writeWeekly',
        name: 'writeWeekly',
        isNest: false,
        icon: 'el-icon-edit',
        meta: {
          zhName: '写周报',
          key: '1-1',
          role: 4
        },
        component: writeWeekly
      }, {
        path: '/weeklyList',
        name: 'weeklyList',
        isNest: false,
        icon: 'el-icon-search',
        meta: {
          zhName: '历史周报',
          key: '1-2',
          role: 4
        },
        component: weeklyList
      }]
    }
  ]
})
