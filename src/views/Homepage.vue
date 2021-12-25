<template>
  <banner-component
    :image="require('@/assets/banners/hero-1.jpg')"
    genre="Adventure"
    title="Fate / Stay Night:<br>Unlimited Blade Works"
    description="After 30 days of travel across the world..."
  ></banner-component>
  <slider-component :data="$store.state.homepage.releaseToday.data" title="Release Today"></slider-component>
  <slider-component :data="$store.state.homepage.seasonFall2021.data" title="Fall Season 2021"></slider-component>
  <slider-component :data="$store.state.homepage.topAnimes.data" title="Top Anime"></slider-component>
  <slider-component :data="$store.state.homepage.topMangas.data" title="Top Manga"></slider-component>
  <slider-component :data="$store.state.homepage.upComing.data" title="UpComing"></slider-component>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    let homeStatus = 0;
    const store = useStore();
    onMounted(() => {
      if (!homeStatus) {
        homeStatus = 1;
        store.dispatch("homepage/getHomepage");
      }
    });
  },
};
</script>