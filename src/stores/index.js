import { createStore } from 'vuex';
import homepage from './modules/homepage.js'
import season from './modules/season.js'
import search from './modules/search.js'
import headerData from './header.js';
export default createStore({
    modules: {
        homepage,
        search,
        season,
    },
    state() {
        return {
            headerData,
            loginModal: false,
            registerModal: false,
            badgeTypeColors: {
                TV: "var(--pink)",
                Movie: "var(--green)",
                OVA: "var(--purple)",
                Manga: "var(--yellow)",
            },
        };
    },
    mutations: {

    },
    actions: {

    },
    getters: {},
});