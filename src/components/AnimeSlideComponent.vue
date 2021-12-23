<template>
  <div class="animeSlide">
    <h2>{{$attrs.title}}</h2>
    <div class="slider">
      <var-col :span="9" v-for="anime in animes" :key="anime" style="padding: 0 10px;">
        <var-skeleton
          card
          :loading="animes.length ? false : true"
          :rows="1"
          :rows-width="['175px']"
        >
          <div class="animeCard">
            <router-link :to="{name: 'anime-detail', params: {mal_id: anime.mal_id}}">
              <var-image :src="anime.image_url" fit="fill" width="100%" height="250px" lazy />
            </router-link>
            <span class="animeTitle">{{anime.title}}</span>
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["animes"],
};
</script>

<style scoped>
h2 {
  font-family: Biotif-bold;
  font-size: 18px;
  margin-bottom: 0.5em;
  padding: 0 20px;
}
.slider {
  display: inline-flex;
  overflow: auto;
  width: 100%;
}
.animeCard {
  position: relative;
  width: 175px;
}
.animeTitle {
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  font-family: Biotif-bold;
  margin: 0.5em auto;
}
.badgeType {
  position: absolute;
  top: 10px;
  left: 0;
  font-family: Biotif-bold;
  font-size: 12px;
  z-index: 1;
}
.badgeScore {
  position: absolute;
  font-size: 14px;
  top: 10px;
  right: 0;
  z-index: 1;
  font-family: Biotif-bold;
}
</style>