# devin-ui

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
![](https://github.com/Rise-Devin/devin-ui/blob/master/demo/assets/box1.gif?raw=true)

##### The attributes of <transition-box>(<transition-box>标签的属性)
属性名(attribute name)|属性值(value)|类型(type)|demo
------------|-----------
navList|nav数据(your data of nav)|list|[{name:'name1',class:'fa fa-list-alt'}]   

