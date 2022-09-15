<template>
  <Form
    ref="getProduct"
    :model="getProduct"
    :label-width="80"
    style="width: 350px"
  >
    <FormItem label="識別碼" prop="id">
      <Input v-model="getProduct.id"></Input>
    </FormItem>
    <FormItem label="圖片位置" prop="avatar">
      <Input v-model="getProduct.avatar"></Input>
    </FormItem>
    <FormItem label="大標題" prop="title">
      <Input v-model="getProduct.title"></Input>
    </FormItem>
    <FormItem label="小標題" prop="description">
      <Input v-model="getProduct.description"></Input>
    </FormItem>
    <FormItem label="內文" prop="content">
      <Input
        v-model="getProduct.content"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 5 }"
      ></Input>
    </FormItem>
  </Form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      id: 0,
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.query.index;
  },
  computed: {
    ...mapState({
      getProduct(state) {
        return state.product.productList[this.id];
      },
    }),
  },
};
</script>

<style></style>
