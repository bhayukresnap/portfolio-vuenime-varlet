<template>
  <var-row>
    <var-col :span="12" v-for="value in data" :key="value" style="padding: 0 10px;">
      <card-anime-component :data="value"></card-anime-component>
    </var-col>
  </var-row>
  <div class="filter">
    <var-icon name="format-list-checkbox" :size="34" v-ripple />
  </div>
</template>

<script>
import CardAnimeComponent from "./CardAnimeComponent.vue";

export default {
  components: {
    CardAnimeComponent,
  },
  props: ["data"],
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

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>