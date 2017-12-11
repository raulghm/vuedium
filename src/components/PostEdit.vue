<template>
  <div class="Post-body">
    <input
      type="text"
      class="Input Input--title"
      placeholder="Title"
      v-model="title"
      autofocus="true"
      @keyup="saveReady()"
    >

    <textarea
      placeholder="Tell your story..."
      class="Input Input--content"
      name="description"
      cols="30"
      rows="10"
      v-model="description"
      @keyup="saveReady()"
    ></textarea>
  </div>
</template>

<script>
import http from '@/http'

export default {
  name: 'NewPost',

  data: () => ({
    title: '',
    description: '',
  }),

  created() {
    this.$store.commit('setHeaderAlt', true)
    this.fetchData()
  },

  computed: {
    saveDone() {
      return this.$store.state.saveDone
    },
  },

  watch: {
    saveDone() {
      // eslint-disable-next-line
      console.log(this.saveDone)

      if (this.saveDone === true) {
        this.save()
      }
    },
  },

  methods: {
    saveReady() {
      if (this.title.length > 0 && this.content.length > 0) {
        this.$store.commit('setPublishReady', true)
      } else {
        this.$store.commit('setPublishReady', false)
      }
    },

    async fetchData() {
      const params = {
      }

      const res = await http.get(`post/${this.$route.params.postSlug}`, params)
      if (res) {
        // eslint-disable-next-line
        console.log(res)
        this.title = res.data.data.post.title
        this.description = res.data.data.post.description
      }
    },

    async save() {
      const params = {
        slug: 'foo1',
        title: this.title,
        description: this.content,
        created_dt: '2017-12-12 15:00:00',
        user: {
          first_name: 'Juan',
          last_name: 'Perez',
          email: 'jperez@email.com',
          created_dt: '2017-12-12 15:00:00',
        },
      }

      const res = await http.post('posts', params)

      if (res) {
        // eslint-disable-next-line
        console.log(res)

        if (res.status === 201) {
          this.$router.push({
            name: 'post',
            params: {
              postSlug: res.data.slug,
            },
          })
        }
      }
    },
  },
}
</script>

<style scoped>
.Post-body {
  max-width: 700px;
  margin: 0 auto;
}

.Input {
  border: 0;
  padding: 0;
  width: 100%;
  outline: 0;
}

.Input--title {
  font-size: 2.4rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 600;
}

.Input--content {
  font-family: serif;
  font-size: 1.4rem;
  line-height: 1.5;
  height: 70vh;
  margin-top: 20px;
  resize: none;
}
</style>
