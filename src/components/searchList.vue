<template>
    <div class="content">
        <h1>搜索</h1>
        <div class="conleft">
            <searchItem :data="searchList"></searchItem>
        </div>
    </div>
</template>

<script>
    import searchItem from './common/searchItem.vue';
    export default{
        data () {
            return {
                searchList:{}
            }
        },
        components:{
            searchItem
        },
        created () {
            let searchtext = this.$route.query.searchText;
            console.log("这是搜索信息"+searchtext);
            this.$http.get('/api/movie/search?q='+searchtext)
                .then((res) => {
                    this.searchList = res.data;
                    console.log(this.searchList);
                })
        }
    }
</script>

<style scoped>
    
</style>