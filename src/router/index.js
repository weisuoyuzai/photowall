import Vue from 'vue'
import Router from 'vue-router'
import imgDetail from 'components/img-detail/img-detail';
import mImage from 'base/image/image';
import myInfo from 'components/my-info/my-info';
import upload from 'components/upload/upload';
import login from 'components/login/login';
import reg from 'components/reg/reg';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      component:mImage
    },
    {
      path:'/myinfo',
      component:myInfo
    },
    {
      path:'/upload',
      component:upload
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/reg',
      component:reg
    },
    {
      path: '/detail',
      component: imgDetail,
      children:[{
        path:':name',
        component: imgDetail,
      }]
    }
  ]
})
