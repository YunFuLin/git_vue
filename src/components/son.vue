<template>
  <div class="son">
    <div>父组件对我说: {{fatherMes}}</div>
    <input type="text" v-model="mes">
    <button @click="send">对父组件说</button>
  </div>
</template>

<script>
export default {
  name:'son',
  props:{
    fatherMes:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      mes:''
    }
  },
  methods:{
    send(){
      this.$emit('sonSay',this.mes)
    }
  }
}
</script>
