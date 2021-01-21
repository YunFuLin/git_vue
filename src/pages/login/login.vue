<template>
  <div class="login">
    <div class="headimg"></div>
    <div class="inputbox">
      <input class="box-input" type="text" placeholder="用户名" v-model="username">
      <input class="box-input" type="password" placeholder="密码" v-model="password">
    </div>
    <div class="login-btn" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:'admin',
      password:'123456',
    }
  },
  methods:{
    login(){
      console.log('用户名:'+this.username,'密码:'+this.password);
      this.$vux.toast.text('登录成功');
      this.$router.push({path:'/home'})
    }
  }
}
</script>

<style lang="less" scoped>
  .headimg{
    width: 80px;
    height: 80px;
    background-color: bisque;
    margin: 120px auto 10px;
  }
  .inputbox{
    margin: 40px auto;
    width: 80%;
    .box-input{
      display: block;
      width: 100%;
      height: 40px;
      margin-bottom: 20px;
      box-sizing: border-box;
      border: 1px solid #999;
      border-radius: 5px;
      padding: 5px 10px;
      }
    }
  .login-btn{
    width: 80%;
    margin: 0 auto;
    height: 40px;
    background: #33cc99;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
  }
</style>
