<template>
  <div id="app">
    <div title="Vuex">
      <nav-bar></nav-bar>
      <side-bar></side-bar>
      <main>
        <router-view></router-view>
      </main>
      <the-footer></the-footer>
    </div>
    <!-- <div title="Auth">
      <user-login></user-login>
    </div> -->
  </div>
</template>

<script>
import NavBar from "./components/ui/NavBar.vue";
import SideBar from "./components/ui/TheSidebar.vue";
import TheFooter from "./components/ui/TheFooter.vue";
// import UserLogin from "./components/pages/auth/UserLogin.vue";
// import UserSignup from "./components/pages/auth/UserLogin.vue";

// import BarChart from "./components/charts/BarChart.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    TheFooter,
    // UserLogin,
    // UserSignup,
    // BarChart,
  },
  computed: {
    // isAuth() {
    //   return this.$store.getters.userIsAuthenticated;
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
