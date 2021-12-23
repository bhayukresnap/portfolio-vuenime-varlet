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
</style>