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
    slug: '',
  }),

  created() {
    this.$store.commit('setHeaderAlt', true)
    this.$store.commit('setSaving', true)
    this.fetchData()
  },

  computed: {
    saveDone() {
      return this.$store.state.saveDone
    },
  },

  watch: {
    saveDone() {
      if (this.saveDone === true) {
        this.save()
      }
    },
  },

  methods: {
    saveReady() {
      if (this.title.length > 0 && this.description.length > 0) {
        this.$store.commit('setSaveReady', true)
      } else {
        this.$store.commit('setSaveReady', false)
      }
    },

    async fetchData() {
      const params = {
      }

      const res = await http.get(`post/${this.$route.params.postSlug}`, params)
      if (res) {
        this.title = res.data.data.post.title
        this.description = res.data.data.post.description
        this.slug = res.data.data.post.slug
      }
    },

    async save() {
      const params = {
        title: this.title,
        description: this.description,
      }

      const res = await http.patch(`post/${this.slug}`, params)

      if (res) {
        if (res.data && res.data.success === true) {
          this.$store.commit('setSaveDone', false)
          this.$store.commit('setSaveReady', false)

          this.$message('Historia editada correctamente')

          this.$router.push({
            name: 'post',
            params: {
              postSlug: res.data.data.post.slug,
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
