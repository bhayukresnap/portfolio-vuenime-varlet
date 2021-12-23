<template>
  <login-component v-model:show="$store.state.loginModal"></login-component>
  <header-component @headerHeight="getHeaderHeight"></header-component>

  <main :style="{marginTop: headerHeight + 'px'}">
    <router-view></router-view>
    <var-back-top :duration="300" style="z-index: 3;" />
  </main>
</template>

<script>
import dark from "@varlet/ui/es/themes/dark";
import { StyleProvider } from "@varlet/ui";
export default {
  data() {
    return {
      headerHeight: 0,
    };
  },
  methods: {
    getHeaderHeight(value) {
      this.headerHeight = value;
    },
  },
  // mounted() {
  //   this.$nextTick(function () {
  //     this.$store.dispatch("homepage/getHomepage");
  //   });
  // },
};
StyleProvider(dark);
</script>

<style>
@font-face {
  font-family: Biotif-Light;
  src: url("~@/assets/fonts/Biotif-Light.woff2") format("truetype");
}

@font-face {
  font-family: Biotif-Bold;
  src: url("~@/assets/fonts/Biotif-Bold.woff2") format("truetype");
}
:root {
  --blue: #0d6efd;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #d63384;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #198754;
  --light-green: #41b883;
  --teal: #20c997;
  --cyan: #0dcaf0;
  --white: #fff;
  --black: #000;
  --gray-100: #f8f9fa;
  --gray-200: #e9ecef;
  --gray-300: #dee2e6;
  --gray-400: #ced4da;
  --gray-500: #adb5bd;
  --gray-600: #6c757d;
  --gray-700: #495057;
  --gray-800: #343a40;
  --gray-900: #212529;
}
html,
body {
  color: var(--color-text);
  background-color: var(--color-body);
  padding: 0;
  margin: 0;
  font-family: Biotif-Light;
}
a {
  transition: 0.25s all;
  font-family: Biotif-Bold;
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: var(--light-green);
}
.body {
  margin-top: 54px;
}

.animeDetailTitle {
  font-size: 20px;
  font-family: Biotif-Bold;
  margin: 1em auto 0.5em auto;
}

.animeDetailLabel::after {
  content: ":";
  text-align: right;
  float: right;
  margin-right: 5px;
}
.animeDetailMultiple:not(:last-child)::after {
  content: ", ";
}
</style>