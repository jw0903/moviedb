<template>
    <div class="content" v-loading="itemLoading">
        <div >
            <movieItem :data="upcoming"></movieItem>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import movieItem from './common/movieItem.vue'
    export default {
        data() {
            return {
                upcoming:{}
            }
        },
        components: {
            movieItem
        },
        created () {
            this.$store.dispatch('item_load', true);
            this.$http.get('/api/movie/coming_soon')
                .then((res) => {
                    this.upcoming = res.data;
                    this.upcoming.subjects.map(sub => sub.rating.average = sub.rating.average/2);
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

