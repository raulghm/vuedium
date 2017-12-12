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
import http from '@/http'

export default {
  name: 'PostList',

  components: {
    PostItem,
  },

  data: () => ({
    posts: null,
  }),

  mounted() {
    this.$store.commit('setHeaderAlt', false)
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const params = {}
      const res = await http.get('post?inflators=user', params)

      if (res) {
        this.posts = res.data.data.posts
      }
    },
  },
}
</script>

<style>
.PostList {
  margin-bottom: 20px;
}
</style>
