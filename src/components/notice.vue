<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-13 18:54:29
 * @LastEditTime: 2019-10-13 20:02:10
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="box" v-if="isShow">
    <h1>{{title}}</h1>
    <p class="box-content">{{message}}</p>
  </div>
</template>
<script>
export default{
  props:{
    title:{
      type:String,
      default:""
    },
    message:{
      type:String,
      default:""
    },
    duration:{
      type:Number,
      default:1000
    }
  },
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    show(){
      this.isShow = true;
      setTimeout(this.hide,this.duration)
    },
    hide(){
      this.isShow = false;
      this.remove();
    }
  }
}
</script>
<style>
.box{
  position: fixed;
  top: 20px;
  left: 0;
  text-align: center;
  pointer-events: none;
  background-color: #fff;
  border: grey 3px solid;
  box-sizing: border-box;
}
.box-content{
  width:200px;
  margin: 10px auto;
  font-size: 14px;
  padding:8px 16px;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
}
</style>
