<template>
  <Menu mode="horizontal" theme="dark" active-name="1">
    <div class="layout-logo">(❁´◡`❁)</div>

    <div class="layout-nav">
      <MenuItem name="1">
        <Icon type="ios-navigate"></Icon>
        {{ user }}
      </MenuItem>
      <MenuItem>
        <Icon type="ios-navigate"></Icon>
        <router-link to="/register">註冊</router-link>  
      </MenuItem>
      <MenuItem>
        <Icon type="ios-navigate"></Icon>
        登出
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      user: "使用者1號",
    };
  },
};
</script>

<style>
.layout-logo {
  color: white;
  width: 100px;
  /*height: 30px;*/
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  /*top: 15px;*/
  left: 20px;
}
.layout-nav {
  width: 350px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>