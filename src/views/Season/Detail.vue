<template>
  <title-heading-component :text="$route.params.season + ' ' + $route.params.year"></title-heading-component>
  <list-anime-component :animes="$store.state.season.seasonDetail.data"></list-anime-component>
</template>

<script>
export default {
  mounted() {
    this.$store.state.season.seasonDetail.data = 20;
    this.$nextTick(function () {
      this.$store.dispatch("season/getSeasonDetail", {
        year: this.$route.params.year,
        season: this.$route.params.season,
      });
    });
  },
};
</script>