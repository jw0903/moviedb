<template>
    <div class="content" v-loading="itemLoading">
        <div class="conleft">
            <searchItem :data="top_250"></searchItem>
        </div>
        <div class="conright">
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