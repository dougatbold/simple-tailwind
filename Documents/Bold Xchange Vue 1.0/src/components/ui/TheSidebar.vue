<template>
  <aside
    class="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white"
  >
    <div class="navbar-vertical-footer-offset">
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

      <!-- Content -->
      <div class="navbar-vertical-content">
        <div
          id="navbarVerticalMenu"
          class="nav nav-pills nav-vertical card-navbar-nav"
        >
          <div class="nav-item">
            <a
              class="nav-link"
              href="/Documents/Bold Xchange 2.0 (SaaS)/dist/index.html"
              role="button"
              data-bs-target="#navbarVerticalMenuDashboards"
              aria-expanded="false"
              aria-controls="navbarVerticalMenuDashboards"
            >
              <b-icon-house-door class="nav-icon"></b-icon-house-door>
              <router-link class="nav-link-title" to="/">Dashboard</router-link>
            </a>
          </div>

          <span class="dropdown-header mt-4">Pages</span>
          <small class="bi-three-dots nav-subtitle-replacer"></small>

          <!-- Nav Item -->
          <router-link class="nav-link" to="/account-orders">
            <b-icon-gift class="nav-icon"></b-icon-gift>Orders
          </router-link>
          <!-- End Nav Item -->

          <!-- Nav Item -->
          <div class="nav-item">
            <router-link class="nav-link" to="/account-invoices">
              <b-icon-receipt class="nav-icon"></b-icon-receipt>Invoices
            </router-link>
          </div>
          <!-- End Nav Item -->
        </div>
        <!-- End Content -->

        <!-- Footer -->
        <div class="navbar-vertical-footer">
          <ul class="navbar-vertical-footer-list">
            <li class="navbar-vertical-footer-list-item">
              <!-- Other Links -->
              <div class="dropdown dropup">
                <button
                  type="button"
                  class="btn btn-ghost-secondary btn-icon rounded-circle"
                  id="otherLinksDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-dropdown-animation
                >
                  <b-icon-info-circle></b-icon-info-circle>
                </button>

                <div
                  class="dropdown-menu navbar-dropdown-menu-borderless"
                  aria-labelledby="otherLinksDropdown"
                >
                  <span class="dropdown-header">Help</span>
                  <a class="dropdown-item" href="#">
                    <b-icon-chat-left-dots
                      class="dropdown-item-icon"
                    ></b-icon-chat-left-dots>
                    <span class="text-truncate" title="Contact support"
                      >Contact support</span
                    >
                  </a>
                </div>
              </div>
              <!-- End Other Links -->
            </li>
          </ul>
        </div>
        <!-- End Footer -->
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
