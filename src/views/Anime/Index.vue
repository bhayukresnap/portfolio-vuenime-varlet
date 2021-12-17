<template>
  <div class="animeDetail">
    <h1 class="animeTitle">Boku no Hero Academia Boku no Hero Academia</h1>
    <var-row :gutter="10" style="margin-bottom:1em;">
      <var-col :span="12">
        <var-image src="https://cdn.myanimelist.net/images/anime/1176/118382.jpg" lazy />
      </var-col>
      <var-col :span="12">
        <div class="score">
          <span class="scoreLabel">score</span>
          <h2 class="scoreValue">7.64</h2>
          <div class="scoreUser">16660123 users</div>
        </div>
        <div class="ranked">
          Rank:
          <b>#575</b>
        </div>
        <div class="ranked">
          Popularity:
          <b>#6</b>
        </div>
        <div class="ranked">
          Members:
          <b>2.454.910</b>
        </div>
        <div class="ranked">
          Favorites:
          <b>{{favorites}}</b>
        </div>
      </var-col>
    </var-row>

    <div class="tabList">
      <var-col
        :span="7"
        v-for="tab of tabs"
        :key="tab"
        @click="componentData = tab"
        :class="{'active': componentData.id === tab.id }"
      >{{tab.text}}</var-col>
    </div>

    <keep-alive>
      <component :is="componentData.id" :data="componentData.data"></component>
    </keep-alive>
  </div>
</template>

<script>
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
    const tabs = {
      information: {
        id: "information-component",
        text: "Information",
        data: "this is information",
      },
      synopsis: {
        id: "synopsis-component",
        text: "Synopsis",
        data: "this is synopsis",
      },
      relatedAnime: {
        id: "related-anime-component",
        text: "Related Anime",
        data: "this is related anime",
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
    };
    return { tabs };
  },
  data() {
    return {
      componentData: this.tabs.information,
    };
  },
  computed: {
    favorites() {
      return formatPrice(6501230);
    },
  },
};
</script>

<style scoped>
.animeTitle {
  margin: 0.25em auto;
  padding: 0;
  font-size: 24px;
  font-family: Biotif-bold;
}
.animeDetail {
  padding-top: 0.5em;
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