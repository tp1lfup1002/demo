<template>
  <List item-layout="vertical" border>
    <ListItem
      v-for="item in productList"
      :key="item.key"
      style="text-algin: left"
    >
      <ListItemMeta
        :avatar="item.avatar"
        :title="item.title"
        :description="item.description"
      />
      {{ item.content }}
      <template #extra>
        <img :src="item.img" width="250" height="150" />
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
  mounted() {
  },
  computed: mapState({
    productList: state => state.product.productList,
  }),
  created() {
    this.$store.dispatch("product/setProduct");
  },
};
</script>

<style></style>
