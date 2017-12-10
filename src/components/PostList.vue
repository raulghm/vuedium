<template>
  <div class="PostList">
    <el-row :gutter="20">
      <el-col :md="8" v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.slug}`">
          <post-item :post="post"></post-item>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'
import axios from 'axios'

export default {
  name: 'PostList',

  components: {
    PostItem,
  },

  data: () => ({
    posts: null,
  }),

  mounted() {
    this.getPosts()
  },

  methods: {
    getPosts() {
      axios.get('http://localhost:3000/posts')
        .then((response) => {
          this.posts = response.data
        })
        // .catch((error) => console.log(error))
    },
  },
}
</script>
