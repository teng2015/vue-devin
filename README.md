# devin-ui
#### OverView
功能:
 * 1.轮播图随tab切换自动轮播,并且可以固定部分宽度不随tab切换进行轮播
 * 2.组件隐藏
 * 2.loading
 ##### My Application
![](https://github.com/Rise-Devin/devin-ui/blob/master/demo/assets/box3.gif?raw=true)
 ##### the block fix(固定块)
![](https://github.com/Rise-Devin/devin-ui/blob/master/demo/assets/box1.gif?raw=true)
 ##### the block not fix (不固定块)
![](https://github.com/Rise-Devin/devin-ui/blob/master/demo/assets/box2.gif?raw=true)


#### Installation
```
npm install devin-ui
```
#### Usage
##### 1. import all components
```javascript
import DevinUi from '../dist/devin-ui'
Vue.use(VueRouter)
```

##### 2. the usage of transition-box
```javascript
        <transition-box ref="transitionBox" :navList='navList' @tap="switchNav" :isfull="true"
        :banner="true" :showBoxHeight="400" :fixBox="true" :fixWidth="0" >
            <template slot="fix_box">
                <div class="box" style="background-color:blue">
                fix block
                </div>
            </template>
            <template slot-scope="row" :slot="item.name" v-for="item in navList">
                <div  class="box">
                    {{row}}
                </div>
            </template>
        </transition-box>
        <p>Curent Index:{{swiperIndex}}</p>
        <button @click="start">start loading</button>
        <button @click="close">close loading</button>

        <button @click="prev">prev</button>
        <button @click="next">next</button>
```


##### The Attributes of transition-box(transition-box标签的属性)
属性名(attribute name) | 属性值(value) | 类型(type) | demo
-------- | -------------------------- | ------- | --------
navList | 控制tab切换(your data of Tab button) | array | [{name:'name1',class:'fa fa-list-alt'}]   
navdisabled | 是否需要允许点击tab进行切换(whether can switch throuth click the tab) |boolean | true
isfull | 是否填满nav ( whether to fill the nav) | boolean | true
banner | 是否需要banner (whether need banner) |boolean | true
showBoxHeight | banner 容器高度 | number | default
isremove | 是否需要remove该元素 (whether need to remove the element) |boolean | true
removeClass | 移除按键样式(the css of btn ) |string | glyphicon glyphicon-remove
fixBox | 是否需要固定block (whether need to fix block) |boolean | true
fixWidth | 固定block的宽度(the width of fixed block) |boolean | true
loadingColor | the background color of loading block |string | #f6f7f8
lineColor | the color of line | string | #00dbc7
navBc | the color of nav's background | string |#23233c

##### The Event of transition-box(transition-box标签的相关事件)
1.get the click event of nav(获取nav点击事件)
```javascript
<transition-box  @tap="switchNav"></transition-box>
```
2.previous page(上一页)
```javascript
this.$refs.transitionBox.up()
```
3.next page(下一页)
```javascript
this.$refs.transitionBox.next()
```
4.any page (任意页)
```javascript
this.$refs.transitionBox.selectNav(index)
```



