import { createApp } from 'vue'
import App from './App.vue'
import Stores from './stores';
import Routers from './routers';
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js';
//Components
import LoginComponent from "./components/LoginComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import BannerComponent from './components/BannerComponent';
import AnimeSlideComponent from './components/AnimeSlideComponent.vue';
import AnimeCardComponent from './components/AnimeCardComponent.vue';

import TitleHeadingComponent from './components/TitleHeadingComponent.vue';

const app = createApp(App);
app.component('login-component', LoginComponent);
app.component('header-component', HeaderComponent);
app.component('banner-component', BannerComponent);
app.component('anime-slide-component', AnimeSlideComponent);
app.component('anime-card-component', AnimeCardComponent);
app.component('title-heading-component', TitleHeadingComponent);
app.use(Varlet);
app.use(Stores);
app.use(Routers);
app.mount('#app');