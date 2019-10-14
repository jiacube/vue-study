<!--
 * @Description: vue入门
 * @Author: jxf
 * @Date: 2019-10-08 09:58:28
 * @LastEditTime: 2019-10-14 09:32:22
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
   <KFormTest></KFormTest>
  <HelloWorld foo="特性$attrs组件通信" ref="hw"></HelloWorld>
  <HelloWorld></HelloWorld>
  <!-- <communicate></communicate> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
import communicate from "./components/communicate"
import KFormTest from './components/form'
export default {
  name: 'App',
  provide(){
    return{
      something:"祖先给后代传值 provide/inject"
    }
  },
  components: {
    HelloWorld,
    communicate,
    KFormTest
  },
  data(){
    return{
      xx:"123"
    }
  },
    mounted(){
        // this.$refs.hw.xx = "引用refs组件通信";
        // this.$children[0].ss = "使用$children 组件通信";
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
