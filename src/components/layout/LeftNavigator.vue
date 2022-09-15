<template>
  <Menu theme="light" width="auto" style="text-align: center">
    <Submenu name="1">
      <template #title>
        <Icon type="ops-navigate"></Icon>
        功能列表
      </template>
      <MenuItem name="1-1">
        <router-link to="/">首頁</router-link>
      </MenuItem>
      <MenuItem name="1-2">
        <router-link to="/Information">個人資訊</router-link>
      </MenuItem>
      <MenuItem name="1-3" v-show="isRegister()">
        <router-link to="/product">商品列表</router-link>
      </MenuItem>
      <MenuItem name="1-4" v-show="isRegister()">
        <router-link to="/add">商品上架</router-link>
      </MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    isRegister() {
      if (localStorage.getItem("name") != null) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
