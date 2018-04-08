<template>
    <div>
        <!-- <p>cookieValue:{{cookieValue}}  </p> -->
        <p><button @click="set">设置cookie</button>&nbsp;<input v-model="val" type="text" /></p>
        <p><button @click="get">获取cookie</button>&nbsp;</p>

        <p><button @click="del">删除cookie</button></p>

    </div>
</template>
<script>
    export default{
        name:'cookie',
        data(){
            return {
                cookieObj:null,
                cookieName:'cookieName',
                val:'',
            }
        },
        computed:{
            cookieValue(){
                return this.cookieObj?this.cookieObj.getCookie():null
            }
            
        },
        methods:{
            set(){
                this.cookieObj.setCookie(this.val,1)
                alert(this.cookieName+'值已更新')
            },
            get(){
                alert(this.cookieName+'值为:'+this.cookieObj.getCookie())
            },
            del(){
                this.cookieObj.delCookie();
                alert(this.cookieName+'值已删除')
            }
        },
        mounted(){
            // this.cookieObj = this.$devin.ck.newCookie(this.cookieName)
            this.cookieObj = new this.$devin.Ck(this.cookieName)
            
        }
    }
</script>