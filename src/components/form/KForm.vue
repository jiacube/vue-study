<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 10:35:47
 * @LastEditTime: 2019-10-13 20:01:58
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default{
    provide(){
        return {
            form:this
        };
    },
    props:{
        model:{
            type:Object,
            required:true
        },
        rules:{
            type:Object,
        }
    },
    methods:{
      validate(callback){
        //全局校验
        //1.获取校验项
       const tasks = this.$children
       .filter(item => item.prop) //只留下拥有prop属性的item
       .map(item => item.validate())

        //2.判断所有项输入通过
        Promise.all(tasks).then(() => callback(true))
        .catch(() => callback(false))
      }
    }

}
</script>
