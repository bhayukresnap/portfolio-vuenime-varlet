<template>
  <var-popup position="left">
    <div class="sideBar">
      <div class="account">
        <var-icon name="account-circle" :size="60" class="icon" />
        <div>
          <a href="javascript:void(0)" @click="$store.state.loginModal = true">LOGIN</a> or
          <a href="javascript:void(0)" @click="$store.state.registerModal = true">REGISTER</a>
        </div>
      </div>
      <var-divider style="margin: 2em auto;" />
      <ul class="subMenu" v-for="header in $store.state.headerData" :key="header">
        <div class="menuTitle" @if="header.name">{{header.name}}</div>
        <li v-for="data in header.data" :key="data">
          <var-icon :name="data.icon" :size="25" class="icon" style="margin-right: .5em;" />
          <router-link :to="data.path" @click="$emit('closeSidebar')">{{data.name}}</router-link>
        </li>
        <var-divider style="margin: 2em auto;" />
      </ul>
    </div>
  </var-popup>
</template>

<script>
export default {};
</script>

<style scoped>
.sideBar {
  width: 300px;
  height: 100vh;
  padding: 10px;
  overflow: auto;
}
.account {
  text-align: center;
}
.account .icon {
  text-align: center;
  margin-top: 0.5em;
  margin-bottom: 0.25em;
}
.menuTitle {
  font-size: 11px;
  font-family: Biotif-bold;
  letter-spacing: 2px;
  text-align: left;
  margin-bottom: 1.5em;
  text-transform: uppercase;
}

ul,
li {
  padding: 0;
  list-style-type: none;
  margin: 0.5em auto;
}
</style>