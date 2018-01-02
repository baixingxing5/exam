import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/pages/Index'
import Login from '@/components/leadingEnd/login'
import Main from '@/components/leadingEnd/index'
import Main_init from '@/components/leadingEnd/controls/index'
import Base from '@/components/leadingEnd/testManage/base'
import Exam from '@/components/leadingEnd/testManage/exam'
import Other from '@/components/leadingEnd/testManage/other'
import examMes from '@/components/leadingEnd/examManage/base'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'Login',
      component:Login,
      alias:'/lg'
    },
    {
      path:'/',
      name:'Main',
      component:Main,
      children:[
        {
          path:'/main',
          name:'Main_init',
          component:Main_init,
        },
        {
          path:'base',
          name:'base',
          component:Base
        },
        {
          path:'exam',
          name:'Exam',
          component:Exam
        },
        {
          path:'other',
          name:'Other',
          component:Other
        },
        
      ]
    },
    {
      path:'/',
      name:'导航二',
      component:Main,
      children:[
        {
          path:'base1',
          name:'examMes',
          component:examMes
        }
      ]
    }
  ]
})
