// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailForPage from './pages/detail/forecast'
import DetailCouPage from './pages/detail/count'
import DetailPubPage from './pages/detail/publish'
//使用vue-router 两句要都写上
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

Vue.config.productionTip = false
let router = new VueRouter({
  mode:'history',
  routes:[
      {
        path:'/',
        component:IndexPage
      },
      {
        path:'/detail',
        component:DetailPage,
        // 不希望用户访问,重定向
        redirect:'/detail/analysis',
        children:[
          {
            // 注意子页面path不加斜线
            path:'analysis',
            component:DetailAnaPage
          },
          {
            // 注意子页面path不加斜线
            path:'forecast',
            component:DetailForPage
          },
          {
            // 注意子页面path不加斜线
            path:'count',
            component:DetailCouPage
          },
          {
            // 注意子页面path不加斜线
            path:'publish',
            component:DetailPubPage
          }
        ]
      },
    ]
})


new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
