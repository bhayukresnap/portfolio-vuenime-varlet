<template>
  <var-skeleton card :loading="anime.mal_id ? false : true" :rows="1">
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
</template>

<script>
export default {
  props: ["anime"],
};
</script>

<style scoped>
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