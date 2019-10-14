/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 16:02:26
 * @LastEditTime: 2019-10-14 17:34:22
 * @LastEditors: Please set LastEditors
 */
let Vue;
// 声明Router类
export default class KVueRouter{
  constructor(options){
          // 1. 解析route配置，生成map
        this.$options = options;
        // path、component映射
        this.routeMap = {};

        // url响应化处理：只要url变化，用到url的组件就会重新render
        // vue-router跟Vue强耦合，只能用于vue
        this.app = new Vue({
          // current保存当前hash
          // vue使其是响应式的
            data:{
              current:"/"
            }
        })
  }

        // 声明初始化函数
        init(){
           // 1. 事件监听
            this.bindEvents();
         // 2. 路由映射操作
         this.createRouteMap();
         // 3. 组件声明和注册
         this.initComponent();
        }

        // 路由映射操作
        createRouteMap(){
          this.$options.routes.forEach(item => {
            this.routeMap[item.path] = item;
        })
        }

        // 事件监听 监听hashchange
        bindEvents(){
          window.addEventListener('hashchange', this.onHashChange.bind(this))
          window.addEventListener('load', this.onHashChange.bind(this))
        }

        // hashchange
        hashchange(){
           // #/index
        this.app.current = window.location.hash.slice(1) || '/'
        }

        // 组件声明和注册
        initComponent(){
           // router-link
          // <router-link to="/">abc</router-link>
            Vue.component('router-link', {
              props: {
                  to: String
              },
              render(h) {
                  // return <a href={this.to}>{this.$slots.default}</a>
                  // h(tag, data, children)
                  // this是组件实例
                  return h('a', {attrs: {href: '#'+this.to}}, [this.$slots.default])
              }
            })
            // router-view
            Vue.component('router-view', {
                render: (h) => {
                    // 拿出要渲染的组件
                    // this希望是Router实例
                    const component = this.routeMap[this.app.current].component;
                    return h(component)
                }
            })
        }
        }
