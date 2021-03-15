<template>
<div>
 <div class="header">
   <div class="left" @click="back">
     <img :src="arrowleft" alt="">
   </div>
   <slot name="title">
     <div></div>
   </slot>

   <!-- 提交 -->
   <div class="right">
     <slot name="up">
       <div></div>
     </slot>
   </div>
 </div>
 <div class="headh"></div>
 </div>
</template>

<script>
export default {
  data(){
    return{
      arrowleft:require('../../static/img/back.png')
    }
  },
  methods:{
    back(){
      if (window.history.length<=1){
        this.$router.push({path:'/'})
      }else{
        this.$router.go(-1);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.headh{height: 44px;}
.header{
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #009688;
  color: #fff;
  font-size: 16px;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  .left{
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    img{
      display: block;
      width: 100%;
    }
  }

}
</style>
