import Vue from 'vue'
import Router from 'vue-router'
import imgDetail from 'components/img-detail/img-detail';
import index from 'components/index/index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:index

    },
    {
      path: '/detail',
      children:[{
        path:':name',
        component: imgDetail,
      }]
    }
  ]
})
