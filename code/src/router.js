import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/paper/index',
      children: [
        {
          /*path: 'index',
          component: () => import('@/views/dashboard/index'),
          name: 'Dashboard'*/
		  path: 'index',
          component: () => import('@/views/paper/index'),
          name: 'PaperIndex'
        }
      ]
    },
    {
      path: '/paper',
      component: Layout,
	  redirect: '/paper/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/paper/index'),
          name: 'PaperIndex'
        }
      ]
    },/**/
    {
      path: '/user',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/user-info/index'),
          name: 'UserInfo'
        }
      ]
    },
    {
      path: '/user',
      component: Layout,
      children: [
        {
          path: 'message',
          component: () => import('@/views/user-info/message'),
          name: 'UserMessage'
        }
      ]
    },
    {
	  path: '/game/start',
	  component: () => import('@/views/game/start'),
	  name: 'start'
    },
    {
	  path: '/game/lx1',
	  component: () => import('@/views/game/lx1'),
	  name: 'lx1'
    },
    {
      path: '/game/red1',
      component: () => import('@/views/game/red1'),
      name: 'red1'
    },{
      path: '/game/red2',
      component: () => import('@/views/game/red2'),
      name: 'red2'
    }
  ]
})

export { router }
