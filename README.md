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
        <transition-box ref="transitionBox" :navList='navList' @tap="switchNav" :isfull="true" :banner="true" :showBoxHeight="400" :fixBox="true" :fixWidth="0" >
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
