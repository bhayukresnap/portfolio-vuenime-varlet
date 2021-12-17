<template>
  <div class="search" v-if="$attrs.status">
    <div class="searchBody">
      <div class="closeButton">
        <var-icon name="window-close" :size="36" @click="$emit('closeSearchbar')" />
      </div>
      <input type="text" class="searchInput" placeholder="Cari berdasarkan Judul, Genre, Pemain" />
    </div>
  </div>
</template>

<style>
.search[status="true"] ~ main {
  display: none;
}
</style>

<style scoped>
.closeButton {
  text-align: right;
  height: auto;
  margin: 1em;
  cursor: pointer;
}

.search {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 4;
  background-color: var(--gray-900);
  overflow: auto;
}
.searchBody {
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 100%;
}
.searchInput {
  background-color: transparent;
  border: 0;
  display: block;
  font-family: Biotif, Segoe UI, sans-serif;
  height: 24px;
  padding: 0.75em 0;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.5px;
  text-align: center;
  color: #fcfcfc;
  outline: none;
  border-bottom: 2px solid var(--white);
  width: 100%;
}
</style>