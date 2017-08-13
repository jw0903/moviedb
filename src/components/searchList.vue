<template>
    <div class="content">
        <h2>搜索 {{searchText}}</h2>
        <div class="conleft" v-loading="pageLoading">
            <searchItem :data="searchList"></searchItem>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import searchItem from './common/searchItem.vue';
    export default{
        data () {
            return {
                
            }
        },
        components:{
            searchItem
        },
        mounted () {
            this.$store.dispatch("getSearchDetail");
        },
        computed: {
            ...mapGetters([
                'searchList',
                'searchText',
                'pageLoading'
            ])
        }
    }
</script>

<style scoped>
    
</style>