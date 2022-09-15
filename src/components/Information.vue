<template>
    <h3>使用者代號: {{getID}}</h3>
    <h3>姓名: {{getName}}</h3>
    <h3>郵件: {{getMail}}</h3>
    <h3>性別: {{getGender}}</h3>

</template>

<script>
export default {
  data() {
    return {
        getID : localStorage.getItem("ID"), //取出已存在瀏覽器的資料
        getName : localStorage.getItem("name"), //取出已存在瀏覽器的資料
        getMail : localStorage.getItem("mail"), //取出已存在瀏覽器的資料
        getGender : localStorage.getItem("gender"), //取出已存在瀏覽器的資料


    };
  },
}
</script>

<style>

</style>