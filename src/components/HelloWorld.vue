<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 09:58:28
 * @LastEditTime: 2019-10-14 09:27:03
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="hello"  @click="saySth2Bro">
    <h1>{{ $attrs.foo }}</h1>
    <div>{{xx}}</div>
    <div>{{ss}}</div>
    <div>{{something}}</div>

    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  inject:['something'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      xx:"xxxx",
      ss:"ssss"
    }
  },
  mounted(){
    //通过共同的父组件做中介
    this.$parent.$on("foo",comp => {
      if(comp !== this){
        console.log("兄弟组件通信$on和$emit");
      }
    });
  },
  methods: {
    saySth2Bro() {
      // 父组件派发消息可以在所有兄弟内监听
      this.$parent.$emit("foo", this);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
