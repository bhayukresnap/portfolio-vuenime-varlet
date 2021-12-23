import Api from '@/api';
export default {
    namespaced: true,
    state() {
        return {
            animeDetail: {
                serverName: '/anime',
                data: '',
            },
            errors: [],
        };
    },
    mutations: {
        setAnimeData(state, data) {
            state.animeDetail.data = data;
        },
    },
    actions: {
        async getAnimeDetail({ commit, state }, animeId) {
            commit('setAnimeData', false);
            try {
                const response = await Api.get(`${state.animeDetail.serverName}/${animeId}`);
                commit('setAnimeData', response.data);
            } catch (err) {
                if (err.response.status === 404) {
                    commit('setAnimeData', err.response.status);
                } else {
                    commit('setErrors', err.response.status, { root: true });
                }

            }
        },
    },
};