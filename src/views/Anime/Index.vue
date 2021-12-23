<template>
  <div class="animeDetail" v-if="$store.state.anime.animeDetail.data === 404">
    <h1 class="animeTitle" style="text-align: center;">Anime is not found!</h1>
  </div>
  <div class="animeDetail" v-else>
    <h1 class="animeTitle">{{informations.Title.Name}}</h1>
    <var-row :gutter="10" style="margin-bottom:1em;">
      <var-col :span="12">
        <var-skeleton :loading="loading" card :rows="0">
          <var-image :src="informations.Image" lazy />
        </var-skeleton>
      </var-col>
      <var-col :span="12">
        <var-skeleton :loading="loading" :rows="5">
          <div class="score">
            <span class="scoreLabel">score</span>
            <h2 class="scoreValue">{{statistics.Score}}</h2>
            <div class="scoreUser">{{statistics.ScoredBy}} users</div>
          </div>
          <div class="ranked" v-for="(value, key) in statistics" :key="key">
            <template v-if="key !== 'Score' && key !== 'ScoredBy'">
              {{key}}:
              <b>{{value}}</b>
            </template>
          </div>
        </var-skeleton>
      </var-col>
    </var-row>

    <var-skeleton :loading="loading" :rows="1">
      <div class="tabList">
        <var-col
          :span="7"
          v-for="tab of tabs"
          :key="tab"
          @click="componentData = tab"
          :class="{'active': componentData.id === tab.id }"
        >{{tab.text}}</var-col>
      </div>
    </var-skeleton>

    <var-skeleton :loading="loading" :rows="7">
      <keep-alive>
        <component :is="componentData.id" :data="componentData.data"></component>
      </keep-alive>
    </var-skeleton>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, nextTick, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { formatPrice } from "@/helpers";
import InformationComponent from "./Information.vue";
import SynopsisComponent from "./Synopsis.vue";
import RelatedAnimeComponent from "./RelatedAnime.vue";
import CharactersComponent from "./Characters.vue";
import StaffsComponent from "./Staffs.vue";
import EpisodesComponent from "./Episodes.vue";
import ReviewsComponent from "./Reviews.vue";
export default {
  components: {
    InformationComponent,
    SynopsisComponent,
    RelatedAnimeComponent,
    CharactersComponent,
    StaffsComponent,
    EpisodesComponent,
    ReviewsComponent,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const loading = computed(() => {
      return (
        store.state.anime.animeDetail.data === 404 ||
        !store.state.anime.animeDetail.data
      );
    });
    let statistics = ref(0);
    let informations = ref(0);
    let synopsis = ref(0);
    let relatedAnime = ref(0);

    watch(
      () => route.params.mal_id,
      (selection) => {
        selection ? store.dispatch("anime/getAnimeDetail", selection) : null;
      }
    );
    onMounted(() => {
      nextTick(() => {
        store.dispatch("anime/getAnimeDetail", route.params.mal_id);
      });
    });

    if (store.state.anime.animeDetail.data != 404) {
      statistics = computed(() => {
        return {
          Score: store.state.anime.animeDetail.data.score,
          ScoredBy: formatPrice(store.state.anime.animeDetail.data.scored_by),
          Ranks: "#" + store.state.anime.animeDetail.data.rank,
          Popularity: "#" + store.state.anime.animeDetail.data.popularity,
          Members: formatPrice(store.state.anime.animeDetail.data.members),
          Favorites: formatPrice(store.state.anime.animeDetail.data.favorites),
        };
      });

      informations = computed(() => {
        return {
          Title: {
            Name: store.state.anime.animeDetail.data.title,
            Japanese: store.state.anime.animeDetail.data.title_japanese,
            English: store.state.anime.animeDetail.data.title_english,
          },
          Image: store.state.anime.animeDetail.data.image_url,
          Trailer: store.state.anime.animeDetail.data.trailer_url,
          Type: store.state.anime.animeDetail.data.type,
          Episodes: store.state.anime.animeDetail.data.episodes,
          Status: store.state.anime.animeDetail.data.status,
          Aired: store.state.anime.animeDetail.data.aired,
          Premiered: store.state.anime.animeDetail.data.premiered,
          Broadcast: store.state.anime.animeDetail.data.broadcast,
          Producers: store.state.anime.animeDetail.data.producers,
          Licensors: store.state.anime.animeDetail.data.licensors,
          Studios: store.state.anime.animeDetail.data.studios,
          Source: store.state.anime.animeDetail.data.source,
          Genres: store.state.anime.animeDetail.data.genres,
          Themes: store.state.anime.animeDetail.data.themes,
          Demographics: store.state.anime.animeDetail.data.demographics,
          Duration: store.state.anime.animeDetail.data.duration,
          Rating: store.state.anime.animeDetail.data.rating,
        };
      });

      synopsis = computed(() => {
        return {
          Synopsis: store.state.anime.animeDetail.data.synopsis,
        };
      });

      relatedAnime = computed(() => {
        return {
          relatedAnime: store.state.anime.animeDetail.data.related,
        };
      });
    }

    const tabs = reactive({
      information: {
        id: "information-component",
        text: "Information",
        data: informations,
      },
      synopsis: {
        id: "synopsis-component",
        text: "Synopsis",
        data: synopsis,
      },
      relatedAnime: {
        id: "related-anime-component",
        text: "Related Anime",
        data: relatedAnime,
      },
      characters: {
        id: "characters-component",
        text: "Characters",
        data: "this is characters",
      },
      staffs: {
        id: "staffs-component",
        text: "Staffs",
        data: "this is staffs",
      },
      episodes: {
        id: "episodes-component",
        text: "Episodes",
        data: "this is episodes",
      },
      Reviews: {
        id: "reviews-component",
        text: "Reviews",
        data: "this is reviews",
      },
    });
    const componentData = ref(tabs.information);

    return { loading, tabs, componentData, informations, statistics };
  },
};
</script>

style

<style>
.animeTitle {
  margin: 0.25em auto;
  padding: 0;
  font-size: 24px;
  font-family: Biotif-bold;
}
.animeDetail {
  padding: 1em;
}
.score {
  margin-bottom: 1em;
}
.tabList {
  display: inline-flex;
  overflow: auto;
  width: 100%;
  text-align: center;
  margin: 1em auto;
}
.tabList div {
  color: var(--gray-600);
}
.tabList .active {
  color: var(--light-green);
  border-bottom: 2px solid var(--light-green);
}
.scoreLabel {
  background-color: var(--light-green);
  font-size: 10px;
  padding: 7.5px 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
}
.scoreValue {
  margin: 0.25em auto 0 auto;
  padding: 0;
  font-size: 36px;
  font-family: Biotif-bold;
}
.scoreUser {
  font-size: 12px;
}

.episodes {
  font-family: Biotif;
  font-size: 20px;
}

.ranked {
  font-size: 14px;
  margin: 0.5em auto;
}
</style>