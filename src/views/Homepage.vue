<template>
    <div class="container">
        <div class="motto">学而不思则罔，思而不学则殆</div>
        <el-button @click="toBlog">进入博客</el-button>
        <Login></Login>
    </div>
</template>

<script>
import Login from '../components/Login.vue'
export default {
    methods:{
        toBlog:function(){
            this.$router.push('myblog')
        }
    },
    components:{Login}
}
</script>

<style scoped>
.container{
    height: 100%;
    width:100%;
    background:#409EFF;
    position: relative;
}
.motto{
    font-size: 30px;
    color:honeydew;
    position:absolute;
    top:30vh;
    left:50vw;
    margin-top:-20px;
    margin-left:-195px
}
.el-button{
    position: absolute;
    top: 50vh;
    left: 50vw;
    margin-top: -13.3px;
    margin-left: -38.5px
}
.login-container{
    position: absolute;
    top:50%;
    left:10%;
    margin-top:-210px

}
</style>
