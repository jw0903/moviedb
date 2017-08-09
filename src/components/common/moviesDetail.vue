<template>
    <div v-loading="pageLoading">
        <h1 class="title"><span>{{movieDetail.title}}</span> <span >({{movieDetail.year}})</span></h1>
        <div class="content">
            <div class="movietext">
                <div class="movie_img">
                    <img :src="movieDetail.images.large" alt="" title="点击查看更多海报" />
                </div>
                <div class="text">
                    <p>
                        <span>导演：</span>
                        <span v-for="item in movieDetail.directors">{{item.name}}</span>
                    </p>
                    <p>
                        <span>主演：</span>
                        <span v-for="item in movieDetail.casts">{{item.name}} </span>
                    </p>
                    <p>
                        <span>类型：</span>
                        <span v-for="item in movieDetail.genres">{{item}}</span>
                    </p>
                    <p>
                        <span>制片国家/地区：</span>
                        <span v-for="item in movieDetail.countries">{{item}}</span>
                    </p>
                    <p>
                        <span>又名：</span>
                        <span v-for="item in movieDetail.aka">{{item}} </span>
                    </p>
                </div>
            </div>
            <div class="mid">
                <p>
                    <span>想看</span>
                    <span>看过</span> 
                    <span>评价：<el-rate show-text></el-rate></span>
                </p>
                <p>
                    <i class="el-icon-message"></i> <span>写短评</span>
                    <i class="el-icon-edit"></i> <span>写影评</span>
                    <i class="el-icon-plus"></i> <span>提问题</span>
                    <span>分享到</span>
                    <!-- <el-collapse @change="handleChange"  style="width:100px;border:none;float:left;">
                      <el-collapse-item title="分享到" name="1">
                        <p>微信</p>
                        <p>新浪</p>
                        <p>QQ</p>
                        <p>腾讯微博</p>
                      </el-collapse-item>
                    </el-collapse> -->
                </p>

            </div>
            <div class="summary">
                <p>{{movieDetail.title}}剧情简介······</p>
                <p>  {{movieDetail.summary}}</p>
            </div>
            <div class="actor">
                <p>{{movieDetail.title}}的影人······</p>
                <ul><li v-for="item in movieDetail.casts"><img :src="item.avatars.small" alt="" /></li></ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters} from 'vuex'
    export default{
        name: 'movieDetail',
        data () {
            return {
                // movieDetail: {}
            }
        },
        mounted () {
            this.$store.dispatch('page_load', true);
            let id = this.$route.query.id;
            console.log(id);
            this.$store.dispatch('moving',{id:id});
            this.$store.dispatch("getMovieDetail");
        },
        computed: {
            ...mapGetters([
                'movieDetail',
                'pageLoading'
            ])
        }
    }
</script>

<style scoped>
    p{
        /*padding: 0;*/
        margin: 0;
    }
    .content{
        width:800px;
        min-height: 500px;
        margin:0 auto;
    }
    .title span:nth-child(2){
        color:#888888;
    }
    .movietext{
        width: 800px;
        display: flex;
        justify-content: space-around;
    }
    .movie_img img{
        height: 187px;
        width:125px;
    }
    .text p{
        margin:8px 0;
    }
    .text p span{
        color:#3377AA;
    }
    .text p span:first-child{
        color:#666666;
    }
    .mid{
        margin:20px 10px;
    }
    .mid p:first-child span{
        margin-right: 20px;
        cursor:pointer;
        line-height: 22px;
        font-size: 12px;
    }
    .mid p:first-child span:nth-child(-n+2){
        border:1px solid #999;
        padding:4px 8px;
        background-color: #FFEADA;
        border-radius: 3px;
    }
    .mid span .el-rate{
        display: inline;
    }
    .mid p{
        margin-bottom: 20px;
    }
    .mid p:nth-child(2){
        color:#3377AA;
    }
    .mid p:nth-child(2) span{
        margin-right: 20px;
        font-size: 15px;
        cursor:pointer;
    }
    .mid p:nth-child(2) span:hover{
        background:#3377AA;
        color:#fff;
    }
    .summary{
        margin-top: 10px;
    }
    .summary p:first-child{
        font-size: 20px;
        color:#007722;
        margin-bottom: 10px;
    }
    .summary p:last-child{
        text-indent: 2em;
    }
    .actor ul{
        display: flex;
        justify-content:space-around;
    }
</style>