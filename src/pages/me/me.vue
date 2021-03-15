<template>
  <div id="life">
    <login></login>
    <div>{{fatherMsg}}</div>
  </div>
</template>

<script>
var login = {
      template: '<h1>{{childMsg}}</h1>',
      data(){
        return {
          childMsg:'child'
        }
      },
      beforeCreate: function () {
        debugger;
        console.log("子组件的beforeCreate")
      },
      created: function () {
        debugger
        console.log("子组件的created")
      },
      beforeMount: function () {
        debugger
        console.log("子组件的beforeMount")
      },
      mounted: function () {
        debugger
        console.log("子组件的mounted")
      }
    }
export default {
  data (){
    return{
      fatherMsg: "father"
    }
  },
  components: {login},
  beforeCreate: function () {
        debugger
        console.log("父组件的beforeCreate")
      },
      created: function () {
        debugger
        console.log("父组件的created")
      },
      beforeMount: function () {
        debugger
        console.log("父组件的beforeMount")
      },
      mounted: function () {
        debugger
        console.log("父组件的mounted")
      },

}
</script>

<style>

</style>
