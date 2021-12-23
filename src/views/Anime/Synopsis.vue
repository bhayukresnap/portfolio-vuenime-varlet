<template>
  <div class="synopsis">
    <h3 class="animeDetailTitle">Synopsis</h3>
    <p>{{data.Synopsis}}</p>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>