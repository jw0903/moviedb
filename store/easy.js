import Vue from 'vue'
import $http from 'vue-resource'
Vue.use($http)

let vm = new Vue()
export const MOVING = 'MOVING'
export const MOVING_DETAIL = 'MOVING_DETAIL';
export const PAGE_LOAD = 'PAGE_LOAD';
export const ITEM_LOAD = 'ITEM_LOAD';
export const SEARCH_TEXT = 'SEARCH_TEXT';

export default{
    state: {
        id: '',
        pageload: true,
        itemload: true,
        searchText: "",
        searchList: {},
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
              // store.state.movieDetail.map(score => score.rating.average = score.rating.average/2);
              store.commit(PAGE_LOAD, false);
            })
        },
        getSearchText(store, text){
            store.commit(SEARCH_TEXT, text);
        },
        getSearchDetail(store){
            vm.$http.get('/api/movie/search?q='+store.state.searchText)
                .then((res) => {
                    store.state.searchList = res.data;
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
        },
        SEARCH_TEXT(state, text) {
            state.searchText = text;
        }
    },
    getters: {
        movieDetail: state => {
            state.movieDetail.rating.average = state.movieDetail.rating.average/2;
            return state.movieDetail;
        },
        pageLoading: state => {
            return state.pageload;
        },
        itemLoading: state => {
            return state.itemload;
        },
        searchText: state => {
            return state.searchText;
        },
        searchList: state => {
            state.searchList.subjects.map(score => score.rating.average = score.rating.average/2)
            return state.searchList;
        }
    }
}