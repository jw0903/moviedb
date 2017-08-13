<template>
    <div class="content" v-loading="itemLoading">
        <div class="conleft" v-loading="itemLoading">
            <movieItem :data="in_theaters"></movieItem>
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
                    this.in_theaters.subjects.map(sub => sub.rating.average = sub.rating.average/2);
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
        min-height: 400px;
    }
</style>