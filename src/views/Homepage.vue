<template>
  <banner-component
    :image="require('@/assets/banners/hero-1.jpg')"
    genre="Adventure"
    title="Fate / Stay Night:<br>Unlimited Blade Works"
    description="After 30 days of travel across the world..."
  ></banner-component>
  <anime-slide-component :animes="$store.state.homepage.releaseToday.data" title="Release Today"></anime-slide-component>
  <anime-slide-component
    :animes="$store.state.homepage.seasonFall2021.data"
    title="Fall Season 2021"
  ></anime-slide-component>
  <anime-slide-component :animes="$store.state.homepage.topAnimes.data" title="Top Anime"></anime-slide-component>
  <anime-slide-component :animes="$store.state.homepage.topMangas.data" title="Top Manga"></anime-slide-component>
  <anime-slide-component :animes="$store.state.homepage.upComing.data" title="UpComing"></anime-slide-component>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function () {
      if (
        !this.$store.state.homepage.releaseToday.data.length &&
        !this.$store.state.homepage.topAnimes.data.length &&
        !this.$store.state.homepage.topMangas.data.length &&
        !this.$store.state.homepage.upComing.data.length
      ) {
        this.$store.dispatch("homepage/getHomepage");
      }
      // console.log("mounted home");
      // this.$store.dispatch("homepage/getHomepage");
    });
  },
};
</script>