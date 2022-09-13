<template>
  <form @submit.prevent="onSubmit">
    <h2>註冊</h2>
    <h4>使用者代號
    <input type="text" class="ID" /></h4>
    <h4>姓名
    <input type="text" class="name" /></h4>
    <h4>性別
    <input type="text" class="gender" /></h4>
    <h4>生日
    <input type="text" class="birthday" /></h4>

    <button type="submit" class="btnClass" value="點擊">註冊</button>
  </form>
</template>
<script>
export default {
  methods: {
    onSubmit() {
        var setID = document.querySelector(".ID").value;
        localStorage.setItem("ID", setID); //把輸入的內容存在瀏覽器


        var setName = document.querySelector(".name").value;
        localStorage.setItem("name", setName); //把輸入的內容存在瀏覽器


        var setGender = document.querySelector(".gender").value;
        localStorage.setItem("gender", setGender); //把輸入的內容存在瀏覽器


        var setBirthday = document.querySelector(".birthday").value;
        localStorage.setItem("birthday", setBirthday); //把輸入的內容存在瀏覽器


    },
  },

  data() {
    return {
      label: "",
      test: "",
    };
  },
};
</script>