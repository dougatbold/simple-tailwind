<template>
  <div>
    <header
      id="header"
      class="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white"
    >
      <div class="navbar-nav-wrap">
        <!-- Logo -->
        <a class="navbar-brand" href="./index.html" aria-label="Front">
          <img
            class="navbar-brand-logo"
            :src="BoldLogo"
            alt="Logo"
            data-hs-theme-appearance="default"
          />
          <!-- <BoldLogo /> -->
          <img
            class="navbar-brand-logo-mini"
            :src="BoldFavicon"
            alt="Logo"
            data-hs-theme-appearance="default"
          />
          <!-- <BoldFavicon /> -->
        </a>
        <!-- End Logo -->

        <div class="navbar-nav-wrap-content-start">
          <!-- Navbar Vertical Toggle -->
          <button
            type="button"
            class="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler"
          >
            <i
              class="bi-arrow-bar-left navbar-toggler-short-align"
              data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Collapse"
            ></i>
            <i
              class="bi-arrow-bar-right navbar-toggler-full-align"
              data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Expand"
            ></i>
          </button>

          <!-- End Navbar Vertical Toggle -->
        </div>

        <div class="navbar-nav-wrap-content-end">
          <!-- Navbar -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- Account -->
              <div class="dropdown">
                <a
                  class="navbar-dropdown-account-wrapper"
                  href="javascript:;"
                  id="accountNavbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-dropdown-animation
                >
                  <div class="avatar avatar-sm avatar-circle">
                    <img
                      class="avatar-img"
                      :src="UserAvatar"
                      alt="User Avatar"
                    />
                    <span
                      class="avatar-status avatar-sm-status avatar-status-success"
                    ></span>
                  </div>
                </a>

                <div
                  class="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account"
                  aria-labelledby="accountNavbarDropdown"
                  style="width: 16rem"
                >
                  <div class="dropdown-item-text">
                    <div class="d-flex align-items-center">
                      <div class="avatar avatar-sm avatar-circle">
                        <img
                          class="avatar-img"
                          :src="UserAvatar"
                          alt="Image Description"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="mb-0">Mark Williams</h5>
                        <p class="card-text text-body">mark@site.com</p>
                      </div>
                    </div>
                  </div>

                  <div class="dropdown-divider"></div>
                  <router-link to="/account-settings" class="dropdown-item"
                    >Settings</router-link
                  >
                  <div class="dropdown-divider"></div>

                  <button @click="logout" class="dropdown-item" href="#">
                    Sign out
                  </button>
                </div>
              </div>
              <!-- End Account -->
            </li>
          </ul>
          <!-- End Navbar -->
        </div>
      </div>
    </header>
  </div>
</template>

<script>
//Imported SVGs
// import BoldLogo from "@/assets/svg/logos/bold-xchange-logo.svg";
// import BoldFavicon from "@/assets/svg/logos/bold-xchange-favicon.svg";

//Imported IMGs
import UserAvatar from "../../assets/img/160x160/img6.jpg";

export default {
  name: "NavBar",
  // components: { BoldLogo, BoldFavicon },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  data() {
    return { UserAvatar };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
