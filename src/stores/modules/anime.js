import Api from '@/api';
export default {
    namespaced: true,
    state() {
        return {
            animeDetail: {
                serverName: '/anime',
                data: '',
                characters: '',
                episodes: '',
                reviews: '',
            },
            errors: [],
        };
    },
    mutations: {
        setAnimeData(state, data) {
            state.animeDetail.data = data;
        },
        setAnimeCharacters(state, data) {
            state.animeDetail.characters = data;
        },
        setAnimeEpisodes(state, data) {
            state.animeDetail.episodes = data;
        }
    },
    actions: {
        async getAnimeDetail({ commit, state }, animeId) {
            commit('setAnimeData', false);
            commit('setAnimeCharacters', false);
            commit('setAnimeEpisodes', false);
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
        async getAnimeCharacters({ commit, state }, animeId) {
            try {
                const response = await Api.get(`${state.animeDetail.serverName}/${animeId}/characters_staff`);
                commit('setAnimeCharacters', response.data.characters);

            } catch (err) {
                if (err.response.status === 404) {
                    commit('setAnimeCharacters', err.response.status);
                } else {
                    commit('setErrors', err.response.status, { root: true });
                }

            }
        },
        async getAnimeEpisodes({ commit, state }, animeId) {
            try {
                const response = await Api.get(`${state.animeDetail.serverName}/${animeId}/episodes`);
                commit('setAnimeEpisodes', response.data.episodes);
                console.log(response.data.episodes)
            } catch (err) {
                if (err.response.status === 404) {
                    commit('setAnimeEpisodes', err.response.status);
                } else {
                    commit('setErrors', err.response.status, { root: true });
                }

            }
        },
    },
};