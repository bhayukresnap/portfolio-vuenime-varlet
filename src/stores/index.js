import { createStore } from 'vuex';
import homepage from './modules/homepage.js'
import season from './modules/season.js'
import search from './modules/search.js'
import anime from './modules/anime.js';
import headerData from './header.js';
export default createStore({
    modules: {
        homepage,
        search,
        season,
        anime,
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
            notifications: true,
        };
    },
    mutations: {
        setErrors(state, error) {
            state.errors = [...state.errors, error];
        },
    },
    actions: {

    },
    getters: {},
});