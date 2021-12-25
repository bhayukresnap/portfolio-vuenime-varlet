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
        setSeasonList(state, data) {
            state.seasonList.data = data;
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
        async getSeasonList({ state, commit }) {
            try {
                const response = await Api.get(state.seasonList.serverName);
                commit('setSeasonList', response.data.archive)
            } catch (err) {
                if (err.response.status === 404) {
                    commit('setSeasonList', err.response.status);
                } else {
                    commit('setErrors', err.response.status, { root: true });
                }
            }
        },
        getSeasonDetail(context, value) {
            context.commit('getSeasonDetail', value);
        },
    },
};