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
import axios from 'axios'

export default {
  name: 'Post',

  data: () => ({
    post: null,
  }),

  created() {
    this.getPost()
  },

  methods: {
    getPost() {
      axios.get('http://localhost:3000/posts?id=1&slug=el-mejor-post')
        .then((response) => {
          this.post = response.data[0]
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error)
        })
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
