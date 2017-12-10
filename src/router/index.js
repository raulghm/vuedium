import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList,
    },
    {
      path: '/post/:postSlug',
      name: 'Post',
      component: Post,
    },
  ],
})
