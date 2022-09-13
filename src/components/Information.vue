<template>
    <div>Information</div>
    <h2>使用者代號: {{getID}}</h2>
    <h2>姓名: {{getName}}</h2>
    <h2>性別: {{getGender}}</h2>
    <h2>生日: {{getBirthday}}</h2>
</template>

<script>
export default {
  name: "InformationComponent",
  data() {
    return {
        getID : localStorage.getItem("ID"), //取出已存在瀏覽器的資料
        getName : localStorage.getItem("name"), //取出已存在瀏覽器的資料
        getGender : localStorage.getItem("gender"), //取出已存在瀏覽器的資料
        getBirthday : localStorage.getItem("birthday") //取出已存在瀏覽器的資料

    };
  },
}
</script>

<style>

</style>