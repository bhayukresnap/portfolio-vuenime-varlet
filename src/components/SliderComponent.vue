<template>
  <div class="animeSlide">
    <h2>{{$attrs.title}}</h2>
    <div class="slider">
      <var-col :span="9" v-for="anime in animes" :key="anime" style="padding: 0 10px;">
        <card-anime-component :anime="anime"></card-anime-component>
      </var-col>
    </div>
  </div>
</template>

<script>
import CardAnimeComponent from "./CardAnimeComponent.vue";
export default {
  components: {
    CardAnimeComponent,
  },
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