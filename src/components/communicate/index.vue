<!--
 * @Description: communicate
 * @Author:jxf
 * @Date: 2019-10-10 10:30:46
 * @LastEditTime: 2019-10-12 09:31:03
 * @LastEditors: Please set LastEditors
 -->
<template>
    <child msg="这是个props父传子组件通信"></child>
</template>
<script>
    import child from "./child1.vue"
  export default {
    name: "communicate",
    components: {
        child
    }
  }

</script>
<style></style>
