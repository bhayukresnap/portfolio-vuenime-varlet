import { createRouter, createWebHistory } from 'vue-router';
import BlankRouter from './BlankRouter.vue';
import Homepage from '@/views/Homepage.vue';
import SeasonIndex from '@/views/Season/Index.vue';
import SeasonDetail from '@/views/Season/Detail.vue';

import AnimeIndex from '@/views/Anime/Index.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        name: 'home',
        path: '',
        component: Homepage,
    }, {
        path: '/season',
        component: BlankRouter,
        children: [{
            name: 'season',
            path: '',
            component: SeasonIndex,
        }, {
            name: 'season-detail',
            path: ':year/:season',
            props: true,
            component: SeasonDetail,
        }]
    }, {
        path: '/anime',
        component: BlankRouter,
        children: [{
            name: 'anime-detail',
            path: ':mal_id',
            props: true,
            component: AnimeIndex
        }],
    }, ],
});

router.beforeEach(() => {
    window.scrollTo(0, 0);
});

export default router;