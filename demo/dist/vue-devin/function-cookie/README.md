# function-cookie


#### 使用方法
```
import VueDevin from '../dist/vue-devin'
Vue.use(VueDevin)

this.cookieObj = new this.$devin.ck(this.cookieName)   //创建cookie管理对象
```
##### 设置cookie/修改cookie
```
this.cookieObj.setCookie(content,expires);  //content:内容->string;expires:过期时间(天)->int
```
 
##### 获取cookie
```
this.cookieObj.getCookie();
```
 
##### 删除cookie
```
this.cookieObj.delCookie();
```
