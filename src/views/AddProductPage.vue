<template>
  <Form ref="formItem" :model="formItem" :label-width="80" style="width: 350px">
    <FormItem label="識別碼" prop="id">
      <Input v-model="formItem.id"></Input>
    </FormItem>
    <FormItem label="圖片位置" prop="avatar">
      <Input v-model="formItem.avatar"></Input>
    </FormItem>
    <FormItem label="大標題" prop="title">
      <Input v-model="formItem.title"></Input>
    </FormItem>
    <FormItem label="小標題" prop="description">
      <Input v-model="formItem.description"></Input>
    </FormItem>
    <FormItem label="內文" prop="content">
      <Input
        v-model="formItem.content"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 5 }"
      ></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit()"> 送出 </Button>
      <Button @click="handleReset('formItem')" style="margin-left: 8px">
        重置
      </Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      formItem: {
        id: "",
        avatar: "",
        title: "",
        description: "",
        content: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("送出");
      this.$store.dispatch("product/addProduct", this.formItem);
      this.$Message['success']({
        background: true,
        content: '新增成功'
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>

<style></style>
