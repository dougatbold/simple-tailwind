<template>
  <main id="content" role="main" class="main mt-10">
    <!-- Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <div class="page-header d-print-none">
        <h1 class="page-header-title text-start">Orders</h1>
      </div>

      <!-- End Page Header -->
      <!-- List Group -->
      <ul class="list-group list-group-horizontal" v-if="hasOrders">
        <!-- List Item -->
        <li class="list-group-item" v-for="order in getOrders" :key="order._id">
          <router-link
            class="card card-flush card-transition"
            to="/account-order/"
          >
            <img class="card-img-top" :src="CarMax1" alt="Image Description" />
            <div class="card-body">
              <span class="card-subtitle text-body text-start">{{
                order.dateOrdered
              }}</span>
              <h3 class="card-title text-start">
                {{ order.title }}
              </h3>
            </div>
          </router-link>
        </li>
        <!-- End List Item -->
      </ul>
      <h3 v-else class="text-start">No orders found.</h3>
      <!-- End List Group -->
    </div>
    <!-- End Content -->
  </main>
</template>

<script>
// IMPORTED IMGs
// import UserAvatar from "../assets/img/160x160/img6.jpg";
import CarMax1 from "../../../assets/img/400x400/carmax1.jpg";

export default {
  name: "AccountOrders",
  data() {
    return { CarMax1 };
  },
  computed: {
    getOrders() {
      return this.$store.getters["orders/orders"];
    },
    hasOrders() {
      return this.$store.getters["orders/hasOrders"];
    },
    // individualOrderLink() {
    //   return this.$route.path + this._id;
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
