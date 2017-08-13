<template>
    <div class="content" v-loading="itemLoading">
        <div class="conleft">
            <searchItem :data="top_250"></searchItem>
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
    import { mapGetters } from 'vuex';
    import searchItem from './common/searchItem.vue'
    export default {
        data() {
            return {
                top_250:{}
            }
        },
        components: {
            searchItem
        },
        created () {
            this.$store.dispatch('item_load', true);
            this.$http.get('/api/movie/top250')
                .then((res) => {
                    this.top_250 = res.data;
                    this.top_250.subjects.map(score => score.rating.average = score.rating.average/2)
                    this.$store.dispatch('item_load', false);
                }, (err) => {
                    console.log(err);
                })
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
        display: flex;
        width: 900px;
    }
    .content .conleft{
        width:700px;
    }
    .right{
        min-width:200px;
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