<template>
  <div class="animeSlide">
    <h2 v-if="$attrs.title">{{$attrs.title}}</h2>
    <div class="slider" v-if="type == 'anime'">
      <var-col :span="9" v-for="value in data" :key="value" style="padding: 0 10px 0 0;">
        <card-anime-component :data="value"></card-anime-component>
      </var-col>
    </div>
    <div class="slider" v-else>
      <var-col :span="9" v-for="value in data" :key="value" style="padding: 0 10px 0 0;">
        <card-person-component :data="value"></card-person-component>
      </var-col>
    </div>
  </div>
</template>

<script>
import CardAnimeComponent from "./CardAnimeComponent.vue";
import CardPersonComponent from "./CardPersonComponent.vue";
export default {
  components: {
    CardAnimeComponent,
    CardPersonComponent,
  },
  props: {
    data: Array,
    type: {
      type: String,
      default: "anime",
    },
  },
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