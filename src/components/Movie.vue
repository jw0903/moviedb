<template>
    <div class="content">
        <!-- <div class="conTop">
            <p><span>电影票 - </span><span>北京</span>  <span>【切换城市】</span></p>
        </div> -->
        <div class="conleft" v-loading="itemLoading">
            <movieItem :data="in_theaters"></movieItem>
        </div>
        <div class="conright">
            
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import movieItem from './common/movieItem.vue'
    export default {
        data() {
            return {
                in_theaters:{},
            }
        },
        components: {
            movieItem
        },
        created () {
            this.$store.dispatch('item_load', true);
            this.$http.get('/api/movie/in_theaters')
                .then((res) => {
                    this.in_theaters = res.data;
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