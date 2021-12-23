<template>
  <div class="synopsis">
    <h3 class="animeDetailTitle">Related Anime</h3>
    <var-row v-for="(value, key) in data.relatedAnime" :key="key">
      <var-col :span="7" class="animeDetailLabel">{{key}}</var-col>
      <var-col :span="17">
        <span v-for="data in value" :key="data" class="animeDetailMultiple">
          <router-link
            :to="{name: 'anime-detail', params: {mal_id: data.mal_id}}"
            v-if="$route.params.mal_id !== data.mal_id"
          >{{data.name}}</router-link>
          <template v-else>{{data.name}}</template>
        </span>
      </var-col>
    </var-row>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>