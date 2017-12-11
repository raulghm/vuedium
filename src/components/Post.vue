<template>
  <div class="Post">
    <div class="Post-body">
      <i v-if="!post">Cargando...</i>

      <template v-if="post">
        <h1 class="Post-title" v-text="post.title"></h1>
        <div class="Post-content" v-html="post.description"></div>
      </template>
    </div>
  </div>
</template>

<script>
import http from '@/http'

export default {
  name: 'Post',

  data: () => ({
    post: null,
  }),

  created() {
    this.fetchData()

    this.$store.commit('setHeaderAlt', true)
    this.$store.commit('setEdit', true)
  },

  methods: {
    async fetchData() {
      const params = {
      }

      const res = await http.get(`post/${this.$route.params.postSlug}`, params)
      if (res) {
        // eslint-disable-next-line
        console.log(res)
        this.post = res.data.data.post
      }
    },
  },
}
</script>

<style>
.Post-body {
  max-width: 700px;
  margin: 0 auto;
}

.Post-title {
  font-size: 2.4rem;
}

.Post-content {
  margin-top: 20px;
  font-family: serif;
  font-size: 1.4rem;
  line-height: 1.5;
}
</style>
