<style scoped>
*{
  margin:0;
  padding: 0;
}
    .content blockquote:not(:last-child), .content ol:not(:last-child), .content p:not(:last-child), .content ul:not(:last-child){
        margin:0;
    }
    .transition-box{
        box-shadow: 0 0 30px #ccc;
        background-color: #f6f7f8;
        padding-top: 50px;
    }
    .transition-box  ul.box-nav{
        background-color: #23233c;
        width: 100%;
        margin:0;
        position: relative;
        margin-top: -50px ;
        display: flex;
        height: 50px;
    }
    .transition-box  ul.box-nav.isremove{
        padding-right: 50px;
    }
    .box-nav li{
        display: inline-block;
        line-height: 50px;
        color:#a4a8ac;
        padding: 0 10px;
        margin: 0px;
        text-align: center;
        text-indent: 0;
        cursor: default;
    }
    .box-nav li.navdisabled{
        cursor: pointer;
    }
   .box-nav li.active{
        color:white;
    }
   .box-nav li.navdisabled:hover{
        color:white;
    }
   .box-nav .bottom-line{
        // content: '';
        position: absolute;
        // width: 52px;
        height: 3px;
        bottom:0px;
        transition: all 0.4s;
        background-color:#00dbc7;
    }
    .show_box{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        min-height: 200px;
        transition: all 0.4s;
        box-sizing: border-box;
    }
    .show_box.has_fix{
        padding-left: 400px;
    }
    .main_box{
        width: 400%;
        height: 100%;
        margin:0;
        position: absolute;
        left: 0;
        top: 0;
        transition: all 0.4s;
    }
    .box_item{
        width: 25%;
        height: 100%;
        float: left;
        margin:0;
    }
    .box-icon{
        display: inline-block;
        line-height: 50px;
        margin-right: 10px;
        font-size: 18px;
    }
    .fix_box{
        margin-left: -400px;
        width: 400px;
        height: 100%;
        float: left;
    }
    .box-nav img{
        position: absolute;
        right: 0px;
        top: 50px;
        width: 0px;
        height: 90px;
        transition:all 0.6s;
        z-index: 100;
    }
    .box-nav img.show{
        width: 90px;
    }
</style>
<template>
    <div :style="{width:width?width+'px':'98%',height:height?height+'px':'90%'}" class="transition-box">
        <ul :class="isremove?'isremove':''" data-attr="8px" :style="{'background-color':navBc}" class="box-nav" id="box-nav" ref="oul">
                <li :style="{width:isfull?liwidth:'default'}" @click="selectNav(index)" v-for="(item,index) in navList" ref="oli"  :class="(navIndex==index?'active':'')+(navdisabled?'':' navdisabled')" :key="index"><span class="box-icon" :class="item.class"></span>{{item.name}}</li>
                <li  v-if="isremove" class="navdisabled" style="margin-right: -50px;width:50px;height:50px;"><span :class="removeClass">{{removeClass?'':'X'}}</span></li>
                <span class="bottom-line" :style="{'left':moveDistance+'px','width':curLineWidth+'px','background-color':lineColor}"></span>
                <img :style="{'background-color':loadingColor}" :class="isLoading?'show':''" src="./loading3.gif"/>
        </ul>
        <div v-if="banner" class="show_box" :class="fixBox?'has_fix':''" :style="{'padding-left':fixBox?fixWidth+'px':0,'height':showBoxHeight+'px'}">
            <div v-if="fixBox" class="fix_box" :style="{'margin-left':-fixWidth+'px','width':fixWidth+'px'}">
                <slot name="fix_box"></slot>
            </div>
            <div ref="main_boxs_fa" style="width:100%;height:100%;float: left;position:relative;overflow:hidden;">
            <ul class="main_box" :style="{'left':-left+'px','width':main_box_width}">
                <li :key="index" :style="{'width':box_item_width}" v-for="(item,index) in navList"  class="box_item" ref="oitem">
                    <slot :name="item.name" :row="item">
                      
                    </slot>
                    
                </li>
            </ul>
            </div>
        </div>
    </div>

    <!-- <div>123</div> -->
</template>
<script type="text/javascript">
export default{
  props: {
    width: {default: null},
    height: {default: null},
    navList: {default: []},
    isfull: {default: false},
    removeClass: {default: null},
    isremove: {default: false},
    navdisabled: {default: false},
    banner: {default: false},
    fixBox: {default: false},
    fixWidth: {default: 350},
    loadingColor: {default: 'transparent'},
    showBoxHeight:{default:300},
    lineColor:{default:'#00dbc7'},
    navBc:{default:'#23233c'},

  },
  data () {
    return {
      curLineWidth: 0,
      navIndex: 0,
      liwidth: 0,
      isLoading: false,
      isMounted: false

    }
  },
  computed: {
    main_box_width () {
      if (!this.isMounted || !this.$refs.main_boxs_fa) { return this.isMounted }

      // return this.navList.length * this.$refs.main_boxs_fa.offsetWidth + 'px'
      return this.navList.length * 100 + '%'
    },
    box_item_width () {
      return Math.floor(100 / this.navList.length) + '%'
      // if (!this.isMounted || !this.$refs.main_boxs_fa) { return this.isMounted }
      // return this.main_box_width / this.navList.length + 'px'
    },
    moveDistance () {
      var total = 0
      for (var i = this.navIndex; i > 0; i--) {
        var index = i - 1
        total += this.$refs.oli[index].offsetWidth
      }
      return total
    },
    left () {
      if (!this.isMounted || !this.$refs.oitem) { return this.navIndex }
      return this.$refs.oitem[this.navIndex].offsetWidth * this.navIndex
    }
  },
  methods: {
    selectNav (index, flag = true) {
      if (index < 0 || index >= this.navList.length || this.navdisabled) {
        if (!flag) {
          return
        }
      }
      this.navIndex = index
      this.curLineWidth = this.$refs.oli[index].offsetWidth
      this.$emit('tap', index)
    },
    next (flag) {
      this.selectNav(this.navIndex + 1, flag)
    },
    up (flag) {
      this.selectNav(this.navIndex - 1, flag)
    },
    showLoading () {
      this.isLoading = true
    },
    closeLoading () {
      this.isLoading = false
    }
  },
  mounted () {
    this.liwidth = 100 / this.navList.length + '%'
    this.isMounted = true
    setTimeout(() => {
      this.curLineWidth = this.$refs.oli[this.navIndex].offsetWidth
    }, 100)
  }
}
</script>
