<template>
  <var-popup position="center">
    <var-row :gutter="10" class="row">
      <var-col :span="24">
        <h2 class="loginTitle">LOGIN</h2>
      </var-col>
      <var-col :span="24" class="m-1">
        <var-input placeholder="Email" focus-color="var(--light-green)" />
      </var-col>
      <var-col :span="24" class="m-1">
        <var-input
          placeholder="Password"
          type="password"
          focus-color="var(--light-green)"
          autocomplete="off"
        />
      </var-col>
      <var-col :span="24" class="m-1">
        <var-button block type="success" size="large" v-ripple>Submit</var-button>
      </var-col>
      <var-col :span="24">
        Don't have account?
        <a href="javascript:void(0)">Register here</a>
      </var-col>
      <var-col :span="24" class="m-1" style="text-align:center;">Or login via</var-col>
      <var-col :span="24" style="text-align:center;">
        <var-icon :name="require('@/assets/facebook.png')" :size="40" class="icon" />
        <var-icon :name="require('@/assets/google.png')" :size="40" class="icon" />
        <var-icon :name="require('@/assets/apple.png')" :size="40" class="icon" />
      </var-col>
    </var-row>
  </var-popup>
</template>

<style scoped>
.row {
  position: relative;
  padding: 20px;
  max-width: 700px;
  width: 100%;
}
.loginTitle {
  text-align: center;
  font-size: 28px;
  font-family: Biotif-bold;
  margin: 1em 0 0 0;
}
.m-1 {
  margin: 1em auto;
}
.icon {
  margin: auto 0.1em;
}
</style>