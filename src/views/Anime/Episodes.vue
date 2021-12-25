<template>
  <var-loading type="circle" color="var(--light-green)" v-if="false" />
  <a
    :href="episode.video_url"
    v-for="episode in $store.state.anime.animeDetail.episodes"
    :key="episode"
  >
    <var-cell :title="`Episode ${episode.episode_id}`" border v-ripple>
      <template #desc>
        {{episode.title}}
        <br />
        {{episode.aired ? timeFormatter(episode.aired) : ''}}
      </template>
      <template #extra>
        <var-icon name="chevron-right" />
      </template>
    </var-cell>
  </a>
</template>

<script>
import { timeFormatter } from "@/helpers";
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  props: ["data"],
  setup(props) {
    const store = useStore();
    onMounted(() => {
      store.dispatch("anime/getAnimeEpisodes", props.data);
    });

    return { timeFormatter };
  },
};
</script>

<style scoped>
a {
  font-family: inherit;
}
</style>