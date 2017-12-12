import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import Post from '@/components/Post'
import PostNew from '@/components/PostNew'
import PostEdit from '@/components/PostEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'postList',
      component: PostList,
    },
    {
      path: '/post/:postSlug',
      name: 'post',
      component: Post,
    },
    {
      path: '/post/:postSlug/edit',
      name: 'postEdit',
      component: PostEdit,
    },
    {
      path: '/new-story',
      name: 'postNew',
      component: PostNew,
    },
  ],
})
