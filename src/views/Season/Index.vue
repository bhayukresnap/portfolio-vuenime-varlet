<template>
  <title-heading-component text="Season"></title-heading-component>
  <var-collapse v-model="season" accordion :offset="false">
    <var-skeleton :loading="$store.state.season.seasonList.data.length ? false : true" :rows="60">
      <var-collapse-item
        :title="season.year"
        :name="season.year"
        v-for="season in $store.state.season.seasonList.data"
        :key="season"
      >
        <var-row>
          <var-col
            :span="6"
            v-for="currentSeason in season.seasons"
            :key="currentSeason"
            style="text-align:center; margin: 1em auto;"
          >
            <router-link
              :to="{name:'season-detail', params: {year: season.year, season: currentSeason.toLowerCase()}}"
            >{{currentSeason}}</router-link>
          </var-col>
        </var-row>
      </var-collapse-item>
    </var-skeleton>
  </var-collapse>
</template>

<script>
export default {
  data() {
    return {
      season: [],
    };
  },
  mounted() {
    this.$nextTick(function () {
      if (!this.$store.state.season.seasonList.data.length) {
        this.$store.dispatch("season/getSeasonList");
      }
    });
  },
};
</script>