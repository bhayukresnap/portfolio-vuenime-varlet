import Api from '@/api';
const max = 40;
export default {
    namespaced: true,
    state() {
        return {
            seasonList: {
                serverName: '/season/archive',
                data: max,
            },
            seasonDetail: {
                serverName: '/season',
                data: max,
            },
        };
    },
    mutations: {
        getSeasonList(state) {
            Api.get(state.seasonList.serverName).then(data => {
                state.seasonList.data = data.data.archive;
            }).catch(err => {
                console.log(err)
            });
        },
        getSeasonDetail(state, value) {
            state.seasonDetail.data = max;
            Api.get(`${state.seasonDetail.serverName}/${value.year.toLowerCase()}/${value.season.toLowerCase()}`).then(data => {
                state.seasonDetail.data = data.data.anime;
            }).catch(err => {
                console.log(err)
            });
        },
    },
    actions: {
        getSeasonList(context) {
            context.commit('getSeasonList');
        },
        getSeasonDetail(context, value) {
            context.commit('getSeasonDetail', value);
        },
    },
};