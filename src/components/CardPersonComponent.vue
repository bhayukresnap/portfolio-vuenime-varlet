<template>
  <var-skeleton card :loading="data.mal_id ? false : true" :rows="1">
    <div class="personCard">
      <var-image :src="data.image_url" fit="fill" width="100%" height="250px" lazy />
      <div class="personTitle">
        {{data.name}}
        <br />
        <span style="font-size:12px;">{{data.language}}</span>
      </div>
    </div>
  </var-skeleton>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.personCard {
  position: relative;
  width: 175px;
}
.personTitle {
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  margin: 0.5em auto;
}
</style>