<template>
  <div class="Post-body">
    <input
      type="text"
      class="Input Input--title"
      placeholder="Title"
      v-model="title"
      autofocus="true"
      @keyup="publishReady()"
    >

    <textarea
      placeholder="Tell your story..."
      class="Input Input--content"
      name="content"
      cols="30"
      rows="10"
      v-model="content"
      @keyup="publishReady()"
    ></textarea>
  </div>
</template>

<script>
import http from '@/http'
import User from '@/components/ui/User'

export default {
  name: 'PostNew',

  data: () => ({
    title: '',
    content: '',
  }),

  components: {
    User,
  },

  created() {
    this.$store.commit('setHeaderAlt', true)
    this.$store.commit('setPublishing', true)
  },

  computed: {
    publishDone() {
      return this.$store.state.publishDone
    },
  },

  watch: {
    publishDone() {
      if (this.publishDone === true) {
        this.publish()
      }
    },
  },

  methods: {
    publishReady() {
      if (this.title.length > 0 && this.content.length > 0) {
        this.$store.commit('setPublishReady', true)
      } else {
        this.$store.commit('setPublishReady', false)
      }
    },

    async publish() {
      const params = {
        title: this.title,
        description: this.content,
      }

      const res = await http.post('post', params)

      if (res) {
        if (res.status === -404) {
          this.$message('El titulo ingresado ya existe, prueba con otro')
          this.$store.commit('setPublishReady', false)
          this.$store.commit('setPublishDone', false)
        }

        if (res.data && res.data.success === true) {
          this.$message('Historia agregada correctamente')

          this.$router.push({
            name: 'post',
            params: {
              postSlug: res.data.data.post.slug,
            },
          })
        }
      } else {
        this.$message('Hubo un error al guardar')
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
