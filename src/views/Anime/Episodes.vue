<template>
  <var-loading
    type="circle"
    color="var(--light-green)"
    v-if="$store.state.anime.animeDetail.episodes === false"
  />
  <h3
    style="text-align: center;"
    v-else-if="!$store.state.anime.animeDetail.episodes.length"
  >We don't have the episodes for now</h3>

  <var-list
    loading-text="Loading"
    finished-text="No more"
    :finished="finished"
    v-model:loading="loading"
    @load="loadEpisodes"
    class="episodes"
    v-else
  >
    <a :href="episode.video_url" v-for="episode in episodes" :key="episode">
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
  </var-list>
</template>

<script>
import { timeFormatter } from "@/helpers";
import { reactive, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["data"],
  setup(props) {
    const store = useStore();
    const loading = ref(false);
    const finished = ref(false);
    const episodes = reactive([]);
    let maxPerLoad = 25;
    let startLoad = 0;
    onMounted(() => {
      store.dispatch("anime/getAnimeEpisodes", props.data);
    });

    const loadEpisodes = () => {
      setTimeout(() => {
        for (startLoad; startLoad <= maxPerLoad; startLoad++) {
          if (store.state.anime.animeDetail.episodes[startLoad]) {
            episodes.push(store.state.anime.animeDetail.episodes[startLoad]);
          } else {
            break;
          }
        }
        maxPerLoad += 25;
        loading.value = false;

        if (startLoad >= store.state.anime.animeDetail.episodes.length) {
          finished.value = true;
        }
      }, 500);
    };

    return {
      timeFormatter,
      episodes,
      loading,
      finished,
      loadEpisodes,
    };
  },
};
</script>

<style scoped>
a {
  font-family: inherit;
}
</style>