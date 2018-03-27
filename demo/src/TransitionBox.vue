<style scoped>
    .box{
        width: 100%;
        height: 100%;
        background-color: red;
        text-align: left;
        color:white;
    }
    .root{
        width: 100%;
        height: 100%;
    }
</style>
<template>
    <div class="root">
        <transition-box ref="transitionBox" :navList='navList' @tap="switchNav" :isfull="true" :banner="true" :showBoxHeight="400" :fixBox="true" :fixWidth="400" isremove="true" removeClass="fa fa-times" >
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

    </div>
</template>
<script type="text/javascript">
// import TB from '../dist/transition-box'
    export default{
        name:'LocalTransitionBox',
        data(){
            return{
                navList: [ {
                name: '任务',
                class: 'fa fa-list-alt'
              }, {
                name: '用户上传视频',
                class: 'fa fa-upload'
              }, {
                name: '数据矫正',
                class: 'fa fa-download'
              }, {
                name: '生成报告',
                class: 'fa fa-file-excel'
              }],
              swiperIndex:0
            }
        },
        methods:{
            switchNav (index) {
              console.log(index)
              this.swiperIndex = index
            },
            start(){
                this.$refs.transitionBox.showLoading()
            },
            close(){
                this.$refs.transitionBox.closeLoading()
            },
            prev(){
                this.$refs.transitionBox.up()
            },
            next(){
                this.$refs.transitionBox.next()
            },

        }
    }
</script>