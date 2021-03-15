<template>
  <div class="father">
    <input type="text" v-model="mes">
    <button @click="send">对子组件说</button>
    <div>子组件对我说:{{sonMes}}</div>
    <son :fatherMes='s' @sonSay='so'></son>
  </div>
</template>

<script>
import son from '@/components/son'
export default {
  components: { son },
  name:'father',
  data (){
    return{
      mes:'',
      s:'',
      sonMes:''
    }
  },
  methods:{
    send(){
      this.s=this.mes
    },
    so(value){
      this.sonMes=value
    }
  }
}
</script>

<style>

</style>
