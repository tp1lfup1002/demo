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
        var getID = localStorage.getItem("ID"); //取出已存在瀏覽器的資料
        alert("使用者代號：" + getID);

        var setName = document.querySelector(".name").value;
        localStorage.setItem("name", setName); //把輸入的內容存在瀏覽器
        var getName = localStorage.getItem("name"); //取出已存在瀏覽器的資料
        alert("姓名：" + getName);

        var setGender = document.querySelector(".gender").value;
        localStorage.setItem("gender", setGender); //把輸入的內容存在瀏覽器
        var getGender = localStorage.getItem("gender"); //取出已存在瀏覽器的資料
        alert("性別：" + getGender);

        var setBirthday = document.querySelector(".birthday").value;
        localStorage.setItem("birthday", setBirthday); //把輸入的內容存在瀏覽器
        var getBirthday = localStorage.getItem("birthday"); //取出已存在瀏覽器的資料
        alert("生日：" + getBirthday);

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