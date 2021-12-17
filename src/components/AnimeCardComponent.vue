<template>
  <var-row>
    <var-col :span="12" v-for="anime in animes" :key="anime" style="padding: 0 10px;">
      <var-skeleton card :loading="animes.length ? false : true" :rows="1">
        <div class="animeCard">
          <router-link :to="{name: 'anime-detail', params: {mal_id: anime.mal_id}}">
            <var-image :src="anime.image_url" fit="fill" width="100%" height="250px" lazy />
          </router-link>
          <div class="animeTitle">{{anime.title}}</div>
          <div class="badgeType" :type="anime.type">
            <var-chip
              size="small"
              :round="false"
              :color="$store.state.badgeTypeColors[anime.type]"
            >{{anime.type}}</var-chip>
          </div>
          <div class="badgeScore">
            <var-chip color="var(--red) " size="small" :round="false">
              {{anime.score ? anime.score : "N/A"}}
              <template #left>
                <var-icon name="star" :size="14" />
              </template>
            </var-chip>
          </div>
        </div>
      </var-skeleton>
    </var-col>
  </var-row>
  <div class="filter">
    <var-icon name="format-list-checkbox" :size="34" v-ripple />
  </div>
</template>

<script>
export default {
  props: ["animes"],
};
</script>

<style scoped>
.filter {
  position: fixed;
  bottom: 5%;
  left: 10%;
  z-index: 3;
  transform: translate(-50%, 0);
  background-color: var(--light-green);
  padding: 5px;
  border-radius: 50%;
}
.animeCard {
  position: relative;
}
.animeTitle {
  font-size: 14px;
  margin: 0.75em auto 1.5em auto;
}
.badgeType {
  position: absolute;
  top: 10px;
  left: 0;
  font-family: Biotif-bold;
  font-size: 12px;
  z-index: 2;
}
.badgeScore {
  position: absolute;
  font-size: 14px;
  top: 10px;
  right: 0;
  z-index: 2;
  font-family: Biotif-bold;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>