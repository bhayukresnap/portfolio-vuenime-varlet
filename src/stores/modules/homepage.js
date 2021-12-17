import Api from '@/api';
import { getToday } from '@/helpers';
const max = 20;
export default {
    namespaced: true,
    state() {
        return {
            topAnimes: {
                serverName: '/top/anime',
                data: max,
            },
            topMangas: {
                serverName: '/top/manga',
                data: max,
            },
            seasonFall2021: {
                serverName: '/season/2021/fall',
                data: max,
            },
            releaseToday: {
                serverName: '/schedule/' + getToday().toLowerCase(),
                data: max,
            },
            upComing: {
                serverName: '/season/later',
                data: max,
            },
        };
    },
    mutations: {
        getTopAnimes(state) {
            Api.get(state.topAnimes.serverName).then(data => {
                state.topAnimes.data = data.data.top.slice(0, max);
            }).catch(err => {
                console.log(err)
            });
        },
        getTopMangas(state) {
            Api.get(state.topMangas.serverName).then(data => {
                state.topMangas.data = data.data.top.slice(0, max);
            }).catch(err => {
                console.log(err)
            });
        },
        getSeasonFall2021(state) {
            Api.get(state.seasonFall2021.serverName).then(data => {
                state.seasonFall2021.data = data.data.anime.slice(0, max);
            }).catch(err => {
                console.log(err)
            });
        },
        getReleaseToday(state) {
            Api.get(state.releaseToday.serverName).then(data => {
                state.releaseToday.data = data.data[getToday().toLowerCase()].slice(0, max);
            }).catch(err => {
                console.log(err)
            });
        },
        getUpComing(state) {
            Api.get(state.upComing.serverName).then(data => {
                state.upComing.data = data.data.anime.slice(0, max);
            }).catch(err => {
                console.log(err)
            });
        },
    },
    actions: {
        // getTopAnimes(context) {
        //     context.commit('getTopAnimes');
        // },
        // getTopMangas(context) {
        //     context.commit('getTopMangas');
        // },
        // getSeasonFall2021(context) {
        //     context.commit('getSeasonFall2021');
        // },
        // getReleaseToday(context) {
        //     context.commit('getReleaseToday');
        // },
        // getUpComing(context) {
        //     context.commit('getUpComing');
        // },
        getHomepage(context) {
            const temp = ['getReleaseToday', 'getSeasonFall2021', 'getTopAnimes', 'getTopMangas', 'getUpComing']
            setInterval(() => {
                if (temp.length) {
                    context.commit(temp[0]);
                    temp.shift();
                } else {
                    clearInterval();
                }
            }, 1000)
        }
    },
};