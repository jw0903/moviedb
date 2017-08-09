<template>
    <div class="content">
        <div class="left">
            <div class="movietag" v-for="subject in data.subjects">
                <div class="file_pic">
                    <a @click="showDeatil(subject.id)" >
                        <img :src="subject.images.large" :title="subject.title" />
                    </a>
                </div>
                <div class="summary">
                    <ul>
                        <li class="title"><a @click="showDeatil(subject.id)" >{{subject.title}}({{subject.year}})</a></li>
                        <li><span v-for="item in subject.genres">{{item}} </span></li>
                        <li><span v-for="item in subject.casts">{{item.name}} </span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="add">
                <p>添加豆瓣没有的电影/电视剧···</p>
                <p><span>>添加电影/电视剧</span></p>
                <p><span>>添加影人</span></p>
            </div>
            <div class="search">
                <p>相关搜索·····</p>
                <p><span>>搜索相关的图书</span></p>
                <p><span>>搜索相关的音乐</span></p>
                <p><span>>搜索相关的舞台剧</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        props:{
            data:Object
        },
        methods:{
            showDeatil(id){
                this.$router.push({
                    path:'/moviesDetail',
                    query:{id:id}
                })
            }
        },
        computed: {
            ...mapGetters([
                'itemLoading'
            ])
        }
    }
</script>

<style scoped>
    .content{
        width:900px;
        display: flex;
    }
    .movietag{
        display: flex;
        width:700px;
        height: 250px;
        margin:10px 0;
    }
    .file_pic img{
        width: 150px;
        height: 200px;
        transition: all 0.6s;
    }
    .file_pic img:hover{
        transform: scale(1.2);
    }
    .summary{
        height: 120px;
    }
    .summary ul{
        margin:0 30px;
        padding:0;
        height: 100%;
        list-style-type: none;
    }
    .summary ul li{
        padding-bottom:10px;
        color:#999;
        font-size: 14px;
    }
    .summary .title a{
        text-decoration: none;
        color:#3377AA;
        font-size: 20px;
        cursor: pointer;
    }
    .summary .title a:hover{
        background:#3377AA;
        color:#fff;
    }
    .right{
        height: 300px;
        /*border:1px solid #333;*/
        display: flex;
        flex-direction: column;
    }
    .add p,.search p{
        color:#3377aa;
        margin-bottom: 20px;
    }
    .right .add p:nth-child(1), .search p:nth-child(1){
        font-size: 20px;
        color:#007722;
    }
    .add p:nth-child(n+1), .search p:nth-child(n+1){
        cursor:pointer;
    }
    .add p span:hover, .search p span:hover{
        background-color: #3377aa;
        color:#fff;
    }
</style>