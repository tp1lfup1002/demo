<template>
  <Menu mode="horizontal" theme="dark" active-name="1" style="text-align:center;">
    <div class="layout-logo">(❁´◡`❁)</div>

    <div class="layout-nav">
      <MenuItem name="1">
        <Icon type="ios-contact" />
        {{ userName }}
      </MenuItem>
      <MenuItem name="register">
        <Icon type="ios-paper-outline" />
        <router-link to="/register">註冊</router-link>  
      </MenuItem>
      <MenuItem name="logout">
        <Icon type="ios-alert-outline" />
        登出
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
export default {
  props: ['userName'],
  data() {
    return {
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