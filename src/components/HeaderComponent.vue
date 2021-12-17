<template>
  <SidebarComponent v-model:show="sideBar" @closeSidebar="sideBar = false" />
  <SearchComponent @closeSearchbar="searchBar = false" :status="searchBar" />
  <div style="position: fixed; top:0; width:100%;z-index:3;" ref="header">
    <var-app-bar color="var(--gray-800)">
      <template #left>
        <router-link :to="{name: 'home'}">
          <img src="@/assets/logo.svg" width="30" style="margin-left:1em;margin-right:1em;" />
        </router-link>
      </template>
      <template #right>
        <var-button round text color="transparent" text-color="#ffffff" @click="searchBar = true">
          <var-icon name="magnify" :size="24" />
        </var-button>
        <var-button round text color="transparent" text-color="#ffffff">
          <var-icon name="heart-outline" :size="24" />
        </var-button>
        <var-button round text color="transparent" text-color="#ffffff" @click="sideBar = true">
          <var-icon name="menu" :size="24" />
        </var-button>
      </template>
    </var-app-bar>
  </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import SearchComponent from "./SearchComponent.vue";

export default {
  components: {
    SidebarComponent,
    SearchComponent,
  },
  data() {
    return {
      sideBar: false,
      searchBar: false,
    };
  },
  mounted() {
    this.$emit("headerHeight", this.$refs.header.clientHeight);
  },
};
</script>

<style scoped>
.var-menu {
  background: transparent;
}

.menu-list {
  background: #fff;
}

.menu-list .menu-cell {
  display: block;
  padding: 10px;
}
</style>