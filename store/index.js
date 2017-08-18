import Vue from 'vue';
import Vuex from 'vuex';
import easy from './easy.js'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        easy
    }
})