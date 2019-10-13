/*
 * @Description: Component
 * @Author: jxf
 * @Date: 2019-10-13 18:38:49
 * @LastEditTime: 2019-10-13 22:58:01
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue"
export default function(Component,props){

  //1.创建Component实例
 const vm = new Vue({
    render(h){
      //渲染函数使用
      //h === createElement
      //h(Component) => vdom
      // return <Component></Component>
     return h(Component,{props})
    }
  }).$mount()//先渲染不挂载

  //获取dom
  document.body.appendChild(vm.$el);

  //2.挂载
  const comp = vm.$children[0]; //获取组件实例

  //3.销毁
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy();
  }

  return comp

}

//方式2:Vue.extend()
// export default function(Component,props){
// //1.返回组件的构造函数
// const Ctor = Vue.extend(Component);
// const comp = new Ctor({propsData:props})
// //2.挂载
// comp.$mount();
// document.body.appendChild(comp.$el)
////3.销毁
// comp.remove = ()=>{
//   document.body.removeChild(comp.$el)
//   comp.$destroy();
// }
// return comp;
// }
