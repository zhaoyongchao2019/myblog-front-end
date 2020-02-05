<template>
  <div class="login-container" v-if="$store.state.login_flag">
      <el-button icon="el-icon-close" circle @click="close" class="close-b"></el-button>
      <div class="form">
        <div class="row">
            <label>账号</label>
            <el-input v-model="user"></el-input>
        </div>
        <div class="row">
            <label>密码</label>
            <el-input v-model="password"></el-input>
        </div>
        <el-button type="primary" class="login-b" @click="login">登录</el-button>
      </div>
  </div>
</template>

<script>
import {valiApi} from '../api/login'
export default {
    data(){
        return{
            user:'',
            password:'',
        }
    },
    methods:{
        close(){
            this.$store.commit('disshow_login')
        },
        login(){
            this.$store.dispatch('tologin',{user:this.user,password:this.password})
        }
    },
    async created(){
    let res = await valiApi();
    this.nickname = res.username
    if(res.username !== undefined){
      alert("welcome " + res.username)
    } else {
      alert("请登录")
    }
  }
}
</script>

<style scoped>
.login-container {
  height: 300px;
  width: 300px;
  background: white;
  border-radius: 10px;
}
label{
    color:#409EFF
}
.el-input{
    width: 200px
}
.row{
    padding:0 20px;
    margin:30px 0;
    display: flex;
    justify-content: space-around;
    align-items: center
}
.login-b{
    margin:10px auto;
    display: block;
}
.close-b{
    position: absolute;
    right:0;
    margin:10px
}
.form{
    padding-top:40px
}
</style>
