<template>
  <div class="HeaderBar">
    <a href="/">
      <h1>Vuedium</h1>
    </a>

    <div class="HeaderBar-user">
      <el-dropdown>
        <span class="el-dropdown-link">
          <div class="HeaderBar-userAvatar" style="background-image: url(/static/img/avatar.png);"></div>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Profile</el-dropdown-item>
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
}
</script>

<style>
.HeaderBar {
  padding: 20px;
  border-bottom: 1px solid #eee;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.HeaderBar h1 {
  margin: 0;
  font-family: serif;
  font-size: 2.2rem;
}

.HeaderBar-user {
  position: absolute;
  top: 20px;
  right: 0;
}

.HeaderBar-userAvatar {
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-block;
}

.HeaderBar-userAvatar + i {
  vertical-align: 10px;
}
</style>
