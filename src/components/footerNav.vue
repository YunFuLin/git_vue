<template>
  <div class="tab">
    <div class="tab_item" v-for="(item,index) in tab" :key="index" @click="switchToTab(item.path)">
      <img :src="$route.path === item.path ? item.active:item.normal" alt="">
      <span :class="$route.path === item.path ? 'active': '' ">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return{
      tab:[
        {
          path:'/home',
          normal:require('../../static/img/home_nor.png'),
          active:require('../../static/img/home_act.png'),
          title:'主页'
        },
        {
          path:'/record',
          normal:require('../../static/img/tiku_nor.png'),
          active:require('../../static/img/tiku_act.png'),
          title:'题库'
        },
        {
          path:'/message',
          normal:require('../../static/img/home_nor.png'),
          active:require('../../static/img/home_act.png'),
          title:'信息'
        },
        {
          path:'/me',
          normal:require('../../static/img/me_nor.png'),
          active:require('../../static/img/me_act.png'),
          title:'我的'
        }
      ]
    }
  },
  methods:{
    switchToTab(path){
      // console.log(path);
      this.$router.replace(path);
    }
  }
}
</script>

<style lang="less" scoped>
.tab{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  border-top: 1px solid #c3c3c3;
  display: flex;
  justify-content: space-between;
  .tab_item{
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    padding: 5px 0;
    img{
      display: block;
      width: 26px;
      height: 26px;
    }
    .active{color: #ff6400;font-size: 14px;}
  }
}
</style>
