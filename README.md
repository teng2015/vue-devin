# vue-devin
## Installation
```
npm install vue-devin
```
## OverView  【基于vue的组件库】
### [transition-box](https://github.com/Rise-Devin/vue-devin/blob/master/demo/dist/vue-devin/transition-box/README.md) 轮播+tab切换:
 * 1.轮播图随tab切换自动轮播,并且可以固定部分宽度不随tab切换进行轮播(banner可禁用)
 * 2.固定部分可随意显示隐藏
 * 3.组件可隐藏
 * 4.loading
 ##### demo
![](https://github.com/Rise-Devin/devin-ui/blob/master/demo/assets/box4x.gif?raw=true)


### [cookie](https://github.com/Rise-Devin/vue-devin/blob/master/demo/dist/vue-devin/function-cookie/README.md) 管理:
```javascript
        methods:{
            set(){
                this.cookieObj.setCookie(this.val,1)    //设置cookie
                alert(this.cookieName+'值已更新')  
            },
            get(){
                alert(this.cookieName+'值为:'+this.cookieObj.getCookie())   //获取cookie
            },
            del(){
                this.cookieObj.delCookie();  //删除cookie
                alert(this.cookieName+'值已删除')
            }
        },
        mounted(){
            // this.cookieObj = this.$devin.ck.newCookie(this.cookieName)
            this.cookieObj = new this.$devin.ck(this.cookieName)   //新建cookie管理对象
            
        }
```






## Usage
##### 1. import all components
```javascript
import VueDevin from '../dist/vue-devin'
Vue.use(VueDevin)
```




