<template>
  <div class="information">
    <div>
      <h3 class="animeDetailTitle">Alternative Title</h3>
      <var-row v-for="(value, key) in data.Title" :key="key">
        <var-col :span="7" class="animeDetailLabel">{{key}}</var-col>
        <var-col :span="17">{{value}}</var-col>
      </var-row>
    </div>

    <div class="trailer">
      <h3 class="animeDetailTitle">Trailer</h3>
      <iframe
        :src="`${data.Trailer}?autoplay=0`"
        width="100%"
        height="300px"
        frameborder="0"
        v-if="data.Trailer"
      ></iframe>
      <div v-else>This anime doesn't have trailer yet.</div>
    </div>
    <div class="details">
      <h3 class="animeDetailTitle">Details</h3>
      <var-row v-for="(value, key) in data" :key="key">
        <template v-if="key !== 'Title' && key !== 'Trailer' && key !== 'Image'">
          <var-col :span="7" class="animeDetailLabel">{{key}}</var-col>
          <var-col
            :span="17"
            v-if="!Array.isArray(value)"
          >{{value ? (value.string ? value.string : value) : "-"}}</var-col>
          <var-col :span="17" v-else-if="value.length == 0">-</var-col>
          <var-col :span="17" v-else>
            <span
              v-for="data in value"
              :key="data"
              class="animeDetailMultiple"
            >{{value.length ? data.name : "-"}}</span>
          </var-col>
        </template>
      </var-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>