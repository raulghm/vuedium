<template>
  <div class="PostItem">
    <div class="PostItem-image" :style="{ 'background-image': 'url(' + randomImage + ')' }"></div>

    <div class="PostItem-body">
      <h2 class="PostItem-title" v-text="formatText(post.title, 20)"></h2>
      <div class="PostItem-content" v-html="formatText(post.description, 30)"></div>
    </div>

    <div class="PostItem-bottom">
      <div class="PostItem-meta">
        <div class="PostItem-meta-item">
          <div class="PostItem-userAvatar" style="background-image: url(/static/img/avatar.png);"></div>
        </div>
        <div class="PostItem-meta-item">
          <div class="PostItem-userName" v-text="`${post.user.first_name} ${post.user.last_name}`"></div>
          <div class="PostItem-date" v-text="formatDate(post.created_dt)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  name: 'PostItem',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
  }),

  computed: {
    randomImage() {
      const images = [
        'https://images.unsplash.com/photo-1433878665141-d6ceaf394ae2?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1427847856029-612f5e500306?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1467189484883-c40a85b9e708?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1458938354258-3e66eb36eb7b?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1462349953611-c1e14d9899b3?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1510877876030-1f531e2cf620?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1510839037195-87d2b76bd767?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1511838361618-157e624e8684?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1511789144130-2526f4eb263a?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
        'https://images.unsplash.com/photo-1510574837552-d83aa8293b90?ixlib=rb-0.3.5&q=40&fm=jpg&w=800&h=600',
      ]

      return images[Math.floor((Math.random() * images.length) + 0)]
    },
  },

  methods: {
    formatDate(date) {
      return DateTime.fromISO(date).toLocaleString({ month: 'short', day: 'numeric' })
    },

    formatText(str, max) {
      const result = str.replace(/<(?:.|\n)*?>/gm, '').substr(0, max)
      return `${result}...`
    },
  },
}
</script>

<style>
.PostItem {
  border: 1px solid #eee;
  margin-bottom: 20px;
  text-decoration: none;
}

.PostItem-image {
  height: 100px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}

.PostItem-body {
  padding: 20px;
}

.PostItem-title {
  font-size: 1.4rem;
  margin: 0;
}

.PostItem-content {
  color: #bbb;
  margin-top: 4px;
}

.PostItem-bottom {
  padding: 0 20px 20px 20px;
}

.PostItem-userAvatar {
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.PostItem-meta-item {
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
  font-size: .9rem;
}

.PostItem-userName {
  margin-top: 2px;
}

.PostItem-date {
  margin-top: 2px;
  color: #bbb;
  font-size: .8rem;
}
</style>
