import Vue from 'vue';
import Router from 'vue-router';
import Movie from '../components/Movie.vue';
import Upcoming from '../components/upcoming.vue';
import MoviesDetail from '../components/common/moviesDetail.vue';
import Top250 from '../components/top250.vue';
import SearchList from '../components/searchList.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            // name: 'movie',
            component: Movie
        },
        {
            path:'/upcoming',
            // name: 'upcoming',
            component: Upcoming
        },
        {
            path:'/top250',
            // name: 'top250',
            component: Top250
        },
        {
            path:'/moviesDetail',
            // name: 'moviesDetail',
            component: MoviesDetail
        },
        {
            path:'/search',
            // name: 'search',
            component: SearchList
        }
    ]
})