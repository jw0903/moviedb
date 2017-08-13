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
                        <li class="rate">
                            <el-rate disabled v-model="subject.rating.average"></el-rate>
                            <span>{{subject.rating.average*2}}</span>
                        </li>
                        <li><span v-for="item in subject.genres">{{item}} </span></li>
                        <li><span v-for="item in subject.casts">{{item.name}} </span></li>
                    </ul>
                </div>
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
    .rate .el-rate{
        display: inline-block;
    }
    .rate span{
        vertical-align:middle;
    }
</style>