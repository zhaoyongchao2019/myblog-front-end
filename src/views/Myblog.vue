<template>
    <div class="back">
        <div class="container">
            <div class="per-info">
                <div class="photo">
                    <img src="../assets/sjch.jpg">
                </div>
                <div class="nickname">qiaoqiao</div>
                <div class="introduction">前端开发nodejs</div>
                <div class="operation">
                    <el-button type="primary">浏览文章</el-button>
                    <el-button type="primary">写文章</el-button>
                </div>
            </div>
            <div class="blog-info"></div>
        </div>
    </div>
</template>

<style scoped>
.back{
    background: #409EFF;
    height:100%;
    width:100%
}
.container{
    width:1300px;
    height:100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between
}
.per-info{
    width:20%;
    height: 100%;
    background: white;
}
.blog-info{
    width: 79.5%;
    height:100%;
    background: white
}
.per-info img{
    border-radius: 50%;
    height: 100px;
    width:100px;
}
.photo{
    display: flex;
    justify-content: center;
    padding-top:50px
}
.nickname{
    color: #409EFF;
    font-size: 30px;
    text-align: center;
    font-family:Helvetica;
    font-weight: bold;
    margin-top: 10px
}
.introduction{
    color: #409EFF;
    font-size: 20px;
    text-align: center;
    margin-top: 30px
}
.operation{
    display: flex;
    justify-content:space-around;
    margin-top: 30px
}
</style>