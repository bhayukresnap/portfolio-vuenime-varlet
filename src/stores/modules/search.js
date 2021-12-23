import Api from '@/api';
const max = 20;
export default {
    namespaced: true,
    state() {
        return {
            topSearch: {
                serverName: '/meta/requests/search/today',
                data: max,
            },
        };
    },
    mutations: {
        getTopSearch(state) {
            Api.get(state.topSearch.serverName).then(data => {
                state.topSearch.data = [];
                for (const [key] of Object.entries(data.data)) {
                    const convert = new URL(window.location + key);
                    state.topSearch.data = [...state.topSearch.data, convert.searchParams.get('q')];
                }
                state.topSearch.data.slice(0, max);
            }).catch(err => {
                console.log(err)
            });
        },
    },
    actions: {
        getTopSearch(context) {
            context.commit('getTopSearch');
        },
    },
};