<template>
<div>
  <div class="list">
    <div v-for="(item,index) in list" :key="index" :class="activeClass ==index?'active':''">
      <span class="h-title" @click="IsActive(index)">{{item.title}}</span>
    </div>
  </div>
  <div v-for="(test,i) in lists" :key="i" class="lists">
    <span :class="{acr:test.selected}" @click="text(i)">{{test.name}}</span>
  </div>
  <select v-model="select" @change="selectChange" class="select">
	 	<option v-for="(search, key) in searchList" :key="key" :value="search.id">{{search.name}}</option>
	</select>
</div>
</template>

<script>
export default {
  data (){
    return{
      activeClass: 0,
      list: [
        {title: '章节'},
        {title: '知识点'},
      ],
      lists:[
        {name:'test1',selected:true},
        {name:'test2',selected:false},
      ],
      searchList:[
				{
					id:'1',name:'中国'
				},
				{
					id:'2',name:'美国'
				},
				{
					id:'3',name:'日本'
				},
			],
			select:''
    }
  },
  methods:{
    IsActive(index){
      this.activeClass=index
    },
    text(i){
      this.lists.forEach((item)=>{
        item.selected=false;
        this.lists[i].selected=true
      })
    },
    selectChange(){
      console.log(this.select)
    }
  },
  created(){
    this.select = this.searchList[0].id;
  }
}
</script>

<style scoped lang="less">
.list{
  display: flex;
}
.list>div{
  width: 50%;
  height: 40px;
  border: 1px solid #dcdfe6;
  color: #606266;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  background:#fff;
  box-sizing: border-box;
}
.h-title{
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
}
.list>.active {
    border-color:#f56c6c;
    color: #fff;
    background: #f56c6c;
  }

.lists{
  float: left;
  width: 50%;
  height:40px;
  border: navajowhite 1px solid;
  box-sizing: border-box;
  span{
    height: 40px;
    display: block;
  }
  .acr{background: burlywood;}
}
</style>
