<template>
    <div class="box">
        <div v-loading="pageLoading">
            <h1 class="title"><span>{{movieDetail.title}}</span> <span >({{movieDetail.year}})</span></h1>
            <div class="content">
                <div class="movietext">
                    <div class="movie_img">
                        <img :src="movieDetail.images.large" @click="showPic" alt="" title="点击查看更多海报" />
                    </div>
                    <div class="text">
                        <p>
                            <span>导演：</span>
                            <span v-for="item in movieDetail.directors">{{item.name}}</span>
                        </p>
                        <p>
                            <span>主演：</span>
                            <span class="actorList" v-for="item in movieDetail.casts" @click="showImg(item.id)">{{item.name}} </span>
                        </p>
                        <p class="film_rate">
                            <span>评分：</span>
                            <el-rate disabled  v-model='movieDetail.rating.average'></el-rate>
                            <span>{{movieDetail.rating.average*2}}</span>
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
                    <ul>
                        <li v-for="item in movieDetail.casts">
                            <img title="点击查看详情" :src="item.avatars.small" @click='showImg(item.id)' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="dialog-wrap" >
          <div class="dialog-cover" @click="closeMyself" v-if="isShow"></div>
          <transition name="drop">
            <div class="dialog-content" v-if="isShow">
              <img :src="movieDetail.images.large" alt="" v-if="showpic">
              <div class="actorDetail" v-if="showactor">
                  <img :src="actorMsg.avatars.large" alt="" />
                  <ul class="message">
                      <li>名字: {{ actorMsg.name }}</li>
                      <li>性别: {{ actorMsg.gender }}</li>
                      <li>出生地: {{ actorMsg.born_place }}</li>
                      <li>职业:<span v-for="item in actorMsg.works[0].roles"> {{item}}</span></li>
                      <li>更多外国名字:<span v-for="item in actorMsg.aka_en"> {{ item }}</span></li>
                      <li>家庭成员:</li>
                  </ul>
              </div>
            </div> 
          </transition>
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
                isShow: false,
                actorMsg: {},
                showpic : false,
                showactor: false,
            }
        },
        methods: {
            showPic () {
                this.isShow = true;
                this.showpic = true;
            },
            showImg (id) {
                this.showactor = true;
                console.log("图片id：" + id);
                this.$http.get('/api/movie/celebrity/'+id)
                    .then((res) => {
                        this.actorMsg = res.data;
                        this.isShow = true;
                    },(err) => {
                        console.log(err);
                    });
            },
            closeMyself () {
                this.isShow = false;
                this.showpic = false;
                this.showactor = false;
            },
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
    li{
        list-style-type:none;
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
    .text{
        padding-left:10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .text p{
        /*margin:8px 0;*/
    }
    .text p span{
        color:#3377AA;
    }
    .text p span:first-child{
        color:#666666;
    }
    .film_rate{
        display: flex;
        align-items: center;
        height: 21px;
        line-height: 21px;
    }
    .film_rate span{
        display: inline-block;
    }
    .film_rate .el-rate{
        display: inline-block;
    }
    .actorList:hover{
        cursor:pointer;
        background-color:#2277aa;
        color:#fff;
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
.drop-enter-active {
  transition: all .3s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  /*width:25%;*/
  position: fixed;
  /*min-height: 400px;*/
  top: 20%;
  left: 50%;
  margin-left: -15%;
  z-index: 10;
}
.actorDetail{
    color: #fff;
    background-color: rgba(27,30,31,0.48);
    width:420px;
    height: 300px;
    overflow: hidden;
    display: flex;
}
.actorDetail img{
    width:200px;
    height: 300px;
}
.message{
    margin-left:10px;
    padding:0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
</style>