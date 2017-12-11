<template>
  <div class="HeaderBar" :class="{ 'HeaderBar--alt': $store.state.headerAlt }">
    <div class="HeaderBar-logo HeaderBar-logo--sm" v-show="$store.state.headerAlt">
      <a href="/">V</a>
    </div>

    <div class="HeaderBar-logo" v-show="!$store.state.headerAlt">
      <a href="/">Vuedium</a>
    </div>

    <div class="HeaderBar-post" v-if="$store.state.headerAlt">
      <el-button
        type="text"
        :disabled="!$store.state.publishReady"
        @click="setPublishDone()"
        :class="{ 'is-disabled': !$store.state.publishReady }"
        v-show="$store.state.publishing"
      >Publish</el-button>

      <router-link
        :to="{ name: 'postEdit', params: { postSlug: $route.params.postSlug } }"
        v-show="$store.state.edit"
      >
        <el-button
          type="text"
        >Edit</el-button>
      </router-link>

      <el-button
        type="text"
        :disabled="!$store.state.saveReady"
        @click="setSaveDone()"
        :class="{ 'is-disabled': !$store.state.saveReady }"
        v-show="$store.state.save"
      >Save</el-button>
    </div>

    <div class="HeaderBar-user">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <div class="HeaderBar-userAvatar" style="background-image: url(/static/img/avatar.png);"></div>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">New story</el-dropdown-item>
          <el-dropdown-item>Stories</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',

  data: () => ({
  }),

  methods: {
    setPublishDone() {
      this.$store.commit('setPublishDone', true)
    },

    handleCommand(command) {
      if (command === 'a') {
        this.$router.push({ name: 'newPost' })
      }
    },
  },
}
</script>

<style>
.HeaderBar {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.HeaderBar-logo a {
  display: inline-block;
}

.HeaderBar-logo {
  margin: 0;
  font-family: serif;
  font-size: 2.3rem;
  font-weight: bold;
}

.HeaderBar-logo--sm {
  text-align: left;
}

.HeaderBar-logo--sm a {
  background-color: var(--color-black);
  color: #fff;
  width: 36px;
  height: 36px;
  text-align: center;
  font-size: 2rem;
}

.HeaderBar-user {
  position: absolute;
  top: 18px;
  right: 0;
  cursor: pointer;
}

.HeaderBar-userAvatar {
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-block;
}

.HeaderBar-userAvatar + i {
  vertical-align: 10px;
}

.HeaderBar-post {
  position: absolute;
  top: 14px;
  right: 100px;
}
</style>
