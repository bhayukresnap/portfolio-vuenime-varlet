import Api from '@/api';
export default {
    namespaced: true,
    state() {
        return {
            animeDetail: {
                serverName: '/anime',
                data: '',
                characters: '',
                episodes: [],
                episode_last_page: 1,
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
            if (!data) state.animeDetail.episodes = [];
            else if (state.animeDetail.episodes[0] === false) state.animeDetail.episodes.shift();
            else state.animeDetail.episodes = state.animeDetail.episodes.concat(data)
        },
        setAnimeEpisodeLastPage(state, data) {
            state.animeDetail.episode_last_page = data;
        },
        setAnimeReviews(state, data) {
            state.animeDetail.reviews = data;
        },
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
                if (err.response && err.response.status === 404) {
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
            let current = 1;
            try {
                while (current <= state.animeDetail.episode_last_page) {
                    const response = await Api.get(`${state.animeDetail.serverName}/${animeId}/episodes/${current}`);
                    commit('setAnimeEpisodes', response.data.episodes);
                    commit('setAnimeEpisodeLastPage', response.data.episodes_last_page);
                    current++;
                }
            } catch (err) {
                if (err.response.status === 404) {
                    commit('setAnimeEpisodes', err.response.status);
                } else {
                    commit('setErrors', err.response.status, { root: true });
                }
            }
        },
        async getAnimeReviews({ commit, state }, animeId) {
            try {
                const response = await Api.get(`${state.animeDetail.serverName}/${animeId}/reviews/1`);
                commit('setAnimeReviews', response.data.reviews)
            } catch (err) {
                if (err.response.status === 404) {
                    commit('setAnimeReviews', err.response.status);
                } else {
                    commit('setErrors', err.response.status, { root: true });
                }
            }
        },
    },
};