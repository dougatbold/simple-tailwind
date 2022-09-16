import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";

import App from "./App.vue";
import store from "./store/index";
import router from "./router";

// UI ELEMENTS
import NavBar from "./components/ui/NavBar";
import SideBar from "./components/ui/TheSidebar";
import TheFooter from "./components/ui/TheFooter";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(BootstrapIconsPlugin);

// COMPONENTS
app.component("nav-bar", NavBar);
app.component("side-bar", SideBar);
app.component("the-footer", TheFooter);

app.mount("#app");

//CSS
import "./assets/css/docs.min.css";
import "./assets/css/snippets.min.css";
import "./assets/css/theme.min.css";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
// import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

//JS
import "bootstrap/dist/js/bootstrap.js";
// import "./assets/js/hs.theme-appearance-charts.js";
// import "./assets/js/hs.theme-appearance.js";
