<template>
  <var-row
    v-for="review in $store.state.anime.animeDetail.reviews"
    :key="review"
    align="center"
    :gutter="2"
  >
    <var-col :span="6">
      <var-image
        width="100px"
        height="100px"
        fit="cover"
        radius="50%"
        :src="review.reviewer.image_url"
      />
    </var-col>
    <var-col :span="17" :offset="1">
      <h4>{{review.reviewer.username}}</h4>
    </var-col>
    <var-col>{{review.content}}</var-col>
    <var-col>
      <var-divider />
    </var-col>
  </var-row>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  props: ["data"],
  setup(props) {
    const store = useStore();
    onMounted(() => {
      store.dispatch("anime/getAnimeReviews", props.data);
    });
  },
};
</script>

<style scoped>
</style>