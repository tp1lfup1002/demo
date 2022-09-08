<template>
  <List item-layout="vertical" border >
    <ListItem v-for="item in productList" :key="item.key" style="text-algin:left">
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
import product from '../data/product.json'

export default {
  data() {
    return {
      productList: product
    };
  },
  mounted() {
      this.axios.get('/data/product.json').then(function(response){
          console.log(response);
      }).catch(function(error){
          console.log(error);
      });
  },
};
</script>

<style></style>
