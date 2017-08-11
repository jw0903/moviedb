<template>
    <div class="top">
        <div class="content" >
            <div class="search">
                <h1>豆瓣电影</h1>
                <el-input type="text" placeholder="电影、演员、影院、电视剧" v-model="content" @keyup.enter.native="searchMovie"></el-input>
                <el-button icon="search" @click="searchMovie"></el-button>
            </div>
            <div class="nav">
                <ul>
                    <li><router-link to="/">正在热映</router-link></li>
                    <li><router-link to="/upcoming">即将上映</router-link></li>
                    <li><router-link to="/top250">TOP250</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: ""
            }
        },
        methods: {
            searchMovie() {
                this.$store.commit("page_load", true);
                this.$store.dispatch("getSearchText", this.content);
                this.$store.dispatch("getSearchDetail")
                this.$router.push({
                    path:'/search', 
                    query:{searchText: this.content}
                })
                this.content = "";
            }
        }
    }
</script>

<style>
    .top{
        margin:0;
        padding: 0;
        width: 1366px;
        height: 115px;
        background-color: #f0f3f5;
        color:#2277aa;
    }
    .content{
        width:800px;
        margin:auto;
        padding-top: 20px;
        text-align: left;
    }
    .search {
        padding-bottom:10px;
        border-bottom: 1px solid #e6e1e1;
    }
    .search h1{
        vertical-align: middle;
        display: inline;
    }
    .search .el-input{
        display: inline-block;
        height: 30px;
        width: 400px;
        padding-left: 10px;
        margin-left: 30px;
    }
    .search button{
        /*margin-left: 10px;*/
        /*margin-left:-10px;*/
        height: 35px;
        padding:5px 20px 5px 20px;
        background-color: #2277aa;
        color:#fff;
        border:1px solid #2277aa;
    }
    .search button:hover{
        cursor:pointer;
    }
    .nav {
        width:100%;
        height: 60px;
        margin-left: -45px;
    }
    .nav ul li{
        list-style-type: none;
        float: left;
    }
    .nav ul a:hover{
        background-color: #2277aa;
        border-radius: 3px;
        color: #fff;
    }
    .nav ul li a{
        padding:5px;
        text-decoration: none;
        color: #2277aa;
        font-size: 15px;
        line-height: 20px;
        height: 20px;
    }

</style>