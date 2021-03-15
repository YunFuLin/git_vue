<template>
  <div class="home">
    <myheader>
      <div slot="title">申请</div>
    </myheader>
    <div class="nav clearfix">
      <div v-for="(item,index) in table" :key="index" class="con-item">
        <router-link :to="item.path" class="router">
          <img :src="item.img" alt="">
          <span>{{item.title}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import myheader from '@/components/header'

export default {
  components:{
    myheader,
  },
  data () {
    return {
      table:[
        {path:'/idea1',img:require('../../../static/img/1.png'),title:'国家奖学金'},
        {path:'/idea2',img:require('../../../static/img/2.png'),title:'国家励志奖学金'},
        {path:'/idea3',img:require('../../../static/img/3.png'),title:'国家助学金'},
        {path:'/idea4',img:require('../../../static/img/4.png'),title:'三好学生'},
        {path:'/idea5',img:require('../../../static/img/5.png'),title:'优秀学生干部'},
        {path:'/idea6',img:require('../../../static/img/6.png'),title:'优秀毕业生'},
        {path:'/idea7',img:require('../../../static/img/7.png'),title:'优秀毕业生干部'},
        {path:'/idea8',img:require('../../../static/img/8.png'),title:'十大之星'},
        {path:'/idea9',img:require('../../../static/img/9.png'),title:'十佳大学生'},
        {path:'/idea10',img:require('../../../static/img/10.png'),title:'请假'},
        {path:'/idea11',img:require('../../../static/img/11.png'),title:'违纪撤销'},
        {path:'/idea12',img:require('../../../static/img/12.png'),title:'缓缴通道'},
        {path:'/idea13',img:require('../../../static/img/13.png'),title:'家庭困难认定'},
        {path:'/idea14',img:require('../../../static/img/14.png'),title:'绿色通道'},
        {path:'/idea15',img:require('../../../static/img/15.png'),title:'困难补助'}
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.home{position: relative;padding-bottom: 51px;}
.nav{
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  .con-item{
    width: 30%;
    margin-right: 5%;
    margin-bottom: 15%;
    float: left;
    .router{
      display: block;
      img{
        display: block;
        width: 36px;
        height: 36px;
        margin: 0 auto;
      }
      span{
        display: block;
        text-align: center;
        margin-top: 5px;
      }
    }
  }
  .con-item:nth-child(3n+3){
    margin-right: 0;
  }
}
</style>
