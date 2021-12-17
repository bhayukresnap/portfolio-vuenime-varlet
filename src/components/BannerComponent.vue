<template>
  <div id="banners">
    <var-image :src="image" fit="cover" width="100%" height="500px" lazy />
    <div class="bannerName">
      <var-chip type="danger">{{genre}}</var-chip>
      <h2 v-html="title"></h2>
      <p>{{description}}</p>
      <var-button type="danger" size="large">
        <span class="buttonWatch">
          Watch now
          <var-icon name="chevron-right" :size="26" />
        </span>
      </var-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "description", "genre"],
};
</script>

<style scoped>
#banners {
  position: relative;
}
h2 {
  font-size: 36px;
  font-family: Biotif-bold;
  margin: 0.5em auto;
  padding: 0;
}
p {
  font-size: 20px;
  padding: 0;
  margin: 0 0 1em 0;
}
.buttonWatch {
  font-family: Biotif-bold;
  display: inline-flex;
  align-items: center;
}
.bannerName {
  position: absolute;
  bottom: 15%;
  left: 5%;
  animation: slideIn 1s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>