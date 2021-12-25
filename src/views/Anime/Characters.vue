<template>
  <var-loading
    type="circle"
    color="var(--light-green)"
    v-if="$store.state.anime.animeDetail.characters === false"
  />
  <div
    v-for="character in $store.state.anime.animeDetail.characters"
    :key="character"
    style="margin-bottom: 2em"
  >
    <var-row>
      <var-col :span="12">
        <var-image :src="character.image_url" fit="fill" width="100%" lazy />
      </var-col>
      <var-col :span="12">
        <div style="padding: 1em;">
          {{character.name}}
          <br />
          <span style="font-size: 12px;">{{character.role}}</span>
        </div>
      </var-col>
    </var-row>
    <div style="margin:1em auto; font-size:16px;">Voice actors:</div>
    <slider-component :data="character.voice_actors" :type="'person'"></slider-component>
    <hr />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  props: ["data"],
  setup(props) {
    const store = useStore();
    onMounted(() => {
      store.dispatch("anime/getAnimeCharacters", props.data);
    });
  },
};
</script>