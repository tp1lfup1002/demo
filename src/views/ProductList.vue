<template>
  <List item-layout="vertical" border>
    <ListItem
      v-for="(item, idx) in productList"
      :key="item.key"
      style="text-algin: left"
    >
      <ListItemMeta
        :avatar="item.avatar"
        :title="item.title"
        :description="item.description"
      />
      {{ item.content }}
      <template #action>
        <li>
          <router-link :to="{ name: 'edit', query: { index: idx } }">
            編輯
          </router-link>
        </li>
        <li>
          <a @click="delProduct(idx)">移除</a>
        </li>
      </template>
      <template #extra>
        <img :src="item.avatar" width="250" height="150" />
      </template>
    </ListItem>
  </List>
</template>

<script>
/*import product from "../data/product.json";*/
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    delProduct(key) {
      console.log("移除第" + key + "個");
      this.$store.dispatch("product/delProduct", key);
      this.$Message['success']({
        background: true,
        content: '刪除成功'
      });
    },
  },
  computed: mapState({
    productList: (state) => state.product.productList,
  }),
};
</script>

<style></style>
