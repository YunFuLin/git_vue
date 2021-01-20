<template>
  <div class="login">
    <div class="headimg"></div>
    <div class="inputbox">
      <input type="text" placeholder="用户名" v-model="username">
      <input type="password" placeholder="密码" v-model="password">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:'admin',
      password:'123456',
      me:'123',
      pc:'fit'
    }
  }
}
</script>

<style scoped>
  .headimg{
    width: 80px;
    height: 80px;
    background-color: bisque;
    margin: 120px auto 50px;
  }
</style>
