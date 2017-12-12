<template>
  <div class="User" :class="_type">
    <div class="User-item">
      <div class="User-avatar" style="background-image: url(/static/img/avatar.png);"></div>
    </div>
    <div class="User-item">
      <div class="User-name" v-text="`${user.first_name} ${user.last_name}`"></div>
      <div class="User-date" v-text="formatDate(postDate)"></div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  name: 'User',

  props: {
    user: {
      type: Object,
      required: true,
    },
    postDate: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
  },

  data: () => ({
  }),

  computed: {
    _type() {
      return {
        'User--lg': this.type === 'lg',
      }
    },
  },

  methods: {
    formatDate(date) {
      return DateTime.fromISO(date).toLocaleString({ month: 'short', day: 'numeric' })
    },
  },

}
</script>

<style>
.User-avatar {
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.User--lg .User-avatar {
  width: 60px;
  height: 60px;
}

.User-item {
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
  font-size: .9rem;
}

.User-name {
  margin-top: 2px;
}

.User--lg .User-name {
  margin-top: 6px;
}

.User-date {
  margin-top: 2px;
  color: #bbb;
  font-size: .8rem;
}
</style>
