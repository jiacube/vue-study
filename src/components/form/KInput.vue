<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 10:02:51
 * @LastEditTime: 2019-10-12 10:52:35
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div>
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>
<script>
    export default{
        name:"KInput",
        inheritAttrs:false, // true是将父组件中除了props外的属性添加到子组件的根节点上(说明，即使设置为true，子组件仍然可以通过$attr获取到props以外的属性)
        props:{
            value:{
                type:String,
                default:''
            },
            type:{
                type:String,
                default:"text"
            }
        },
        methods: {
            onInput(e){
                this.$emit("input",e.target.value)
                this.$emit("update:value",e.target.value)
                // 通知校验
                this.$parent.$emit("validate")
            }
        }
    }
</script>