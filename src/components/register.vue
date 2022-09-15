<template>
  <div id ="app">
    <form @submit="onSubmit">
      <h2>註冊</h2>
      <h4>使用者代號：</h4>
        <input type="text"  v-model="ID" />
      <h4>姓名：</h4>
        <input type="text"  v-model="name" />
      <h4>郵件： </h4>
        <input type="text"  v-model="mail" />
      <h4>性別： 
        <input type="radio"  v-model="gender" value="male"/><label for="male">男性</label>
        <input type="radio"  v-model="gender" value="female"/><label for="female">女性</label>
      </h4>
        <button type="submit" class="btnClass" value="點擊">註冊</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      localStorage.setItem("ID", this.ID);
      localStorage.setItem("name", this.name);
      localStorage.setItem("mail", this.mail);
      localStorage.setItem("gender", this.gender); //把輸入的內容存在瀏覽器
    }
  },
};

</script>