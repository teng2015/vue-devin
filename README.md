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
        <transition-box ref="transitionBox" :navList='navList' @tap="switchNav" :isfull="fullflag"
        :banner="true" :removeClass="glyphicon glyphicon-remove" :navdisabled="false" :fixBox="true"
        :fixWidth="400" :isremove="false" loadingColor="#f6f7f8">
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

