import Vue from 'vue'
import $http from 'vue-resource'
Vue.use($http)

let vm = new Vue()
export const MOVING = 'MOVING'
export const MOVING_DETAIL = 'MOVING_DETAIL';
export const PAGE_LOAD = 'PAGE_LOAD';
export const ITEM_LOAD = 'ITEM_LOAD';

export default{
    state: {
        id: '',
        pageload: true,
        itemload: true,
        movieDetail:{

        }
    },
    actions: {
        moving(store, movie){
            store.commit(MOVING, movie)
        },
        getMovieDetail(store){
            vm.$http.get('/api/movie/subject/'+store.state.id)
            .then(res => {
              store.commit(MOVING_DETAIL, res.data);
              store.commit(PAGE_LOAD, false);
            })
        },
        page_load(store,flag) {
            store.commit(PAGE_LOAD, flag);
        },
        item_load(store, flag) {
            store.commit(ITEM_LOAD, flag);
        }
    },
    mutations: {
        MOVING(state, data){
            state.id = data.id;
        },
        MOVING_DETAIL(state, data){
            state.movieDetail = data;
        },
        PAGE_LOAD(state, flag){
            state.pageload = flag;
        },
        ITEM_LOAD(state, flag){
            state.itemload = flag;
        }
    },
    getters: {
        movieDetail: state => {
            return state.movieDetail;
        },
        pageLoading: state => {
            return state.pageload;
        },
        itemLoading: state => {
            return state.itemload;
        }
    }
}