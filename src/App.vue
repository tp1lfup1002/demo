<template>
  <div class="layout">
    <Layout :style="{ height: '-webkit-fill-available' }">
      <Header><banner></banner></Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#fff' }">
          <left-navigator></left-navigator>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Content
            :style="{ padding: '24px', minHeight: '280px', background: '#fff' }"
          >
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Banner from "./components/layout/Banner.vue";
import LeftNavigator from "./components/layout/LeftNavigator.vue";

export default {
  name: "App",
  components: {
    Banner,
    LeftNavigator,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: -webkit-fill-available;
}
</style>
