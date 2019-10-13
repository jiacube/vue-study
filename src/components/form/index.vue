<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 10:03:27
 * @LastEditTime: 2019-10-13 19:55:01
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <h2>KForm Test</h2>
      <KForm :model="model" :rules="rules" ref="loginForm">
            <KFormItem label="用户名" prop="username">
                    <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
                </KFormItem>
                <KFormItem label="密码" prop="password">
                    <KInput type="password" :value.sync="model.password"></KInput>
                </KFormItem>
                <KFormItem>
                  <button @click="submit">登录</button>
              </KFormItem>
      </KForm>

    {{model}}
  </div>
</template>
<script>
  import KForm from "@/components/form/KForm"
  import KFormItem from "@/components/form/KFormItem"
  import KInput from "@/components/form/KInput.vue"
  import Notice from "@/components/notice.vue"
  import create from "@/utils/create.js"
  export default {
    name: "KFormTest",
    components: {
      KInput,
      KFormItem,
      KForm
    },
    data() {
      return {
        model: {
          username: '123',
          passwrod: '23121'
        },
        rules:{
            username:[{required:true,message:"用户名必填"}],password:[{required:true,message:"密码必填"}]
        }
      }
    },
    methods:{
      submit(){
        this.$refs.loginForm.validate(isValidate => {
          const comp = create(Notice,{
            title:"测试12321",
            message: isValidate ? "请求登录" : "校验失败",
            duration:3000
          })
          comp.show()
          // if(isValidate){
            // alert("登陆中。。。")
          // }else {
          //   alert("错误，请重新输入")
          // }
        })
      }
    }
  }

</script>
