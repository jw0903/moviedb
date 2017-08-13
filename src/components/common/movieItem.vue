<template>
    <div class="movie_show">
        <div class="movieTag" v-for="subject in data.subjects">
            <ul>
                <!-- 海报展示 -->
                <li class="file_pic">
                    <a>
                        <img :src="subject.images.large"  @click='showDeatil(subject.id)' />
                        <img src="" alt="" />
                    </a>
                </li>
                <!-- 电影名称 -->
                <li class="film_name">
                    <a><span @click='showDeatil(subject.id)'>{{subject.title}}</span></a>
                </li>
                <!-- 电影评分 -->
                <li class="film_rate">
                    <el-rate v-model="subject.rating.average" disabled>
                    </el-rate>
                    <span class="rateNum">{{subject.rating.average*2}}</span>
                </li>
                <!-- 选座位 -->
                <li class="film_button">
                    <a>特惠选座</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            data:Object,
            value5: 7.5,
        },
        methods: {
            showDeatil(id) {
                this.$router.push({path:'/moviesDetail',query:{id:id}})
            },
        },
        computed: {
            rate(rate) {
                let score = rate / 2.0;
                console.log("分数：" + score);
                return score;
            }
        }
    }
</script>

<style scoped>
    ul{
        margin:0;
        padding:0;
    }
    li{
        list-style-type: none;
    }
    a{
        text-decoration: none;
        color:#333;
    }
    .file_pic a img{
        transition: all 0.6s;
        cursor: pointer;
        width: 160px;
        height: 230px;
    }
    .file_pic a img:hover{
        transform: scale(1.1);
    }
    .film_name a span{
        cursor: pointer;
    }
    .film_name a span:hover{
        color: #2277aa;
    }
    .film_rate .el-rate{
        display: inline-block;
    }

    .film_rate .rateNum {
        vertical-align:middle;
        color:#ff9900;
        font-size: 15px;
    }
    .movie_show{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .movieTag ul{
        display: flex;
        flex-direction: column;
        align-items:center;
    }
    .movieTag ul li:nth-child(n+1){
        margin-bottom: 10px;
    }
    .movieTag{
        height: 350px;
        width:200px;
    }
    .film_button{
        display: block;
        padding:6px 20px;
        background-color: #eee;
        border:1px solid #d9d9d9;
        cursor:pointer;
    }
    .film_buttom:hover{
        background-color: #000;
    }
</style>