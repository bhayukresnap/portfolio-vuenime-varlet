<template>
  <title-heading-component :text="$route.params.season + ' ' + $route.params.year"></title-heading-component>
  <listing-component :data="$store.state.season.seasonDetail.data"></listing-component>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    onMounted(() => {
      store.state.season.seasonDetail.data = 20;
      store.dispatch("season/getSeasonDetail", {
        year: route.params.year,
        season: route.params.season,
      });
    });
  },
};
</script>