import Vue from 'vue';
import Vuex from 'vuex';
import moving from './moving/index.js'
import easy from './easy.js'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        moving,
        easy
    }
})