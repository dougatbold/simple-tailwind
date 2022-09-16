<template>
  <main id="content" role="main" class="main">
    <!-- Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row align-items-center">
          <div class="col">
            <h1 class="page-header-title text-start">Dashboard</h1>
          </div>
          <!-- End Col -->

          <div class="col-auto">
            <a
              class="btn btn-primary fw-bold"
              href="/Documents/Bold Xchange 2.0 (SaaS)/dist/gifts-catalog.html"
            >
              <i class="bi-gift me-1"></i> Shop catalog
            </a>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Row -->
      </div>
      <!-- End Page Header -->

      <!-- TOP ROW STATS -->
      <div class="row">
        <div class="col-sm-6 col-lg-3 mb-3 mb-lg-5">
          <!-- TOTAL SPEND STAT -->
          <a class="card card-hover-shadow h-100" href="#">
            <div class="card-body">
              <h6 class="card-subtitle text-start">Total Spend</h6>

              <div class="row align-items-center gx-2 mb-1">
                <div class="col-6">
                  <h1 class="card-title text-inherit text-start">$72,540</h1>
                </div>
                <!-- End Col -->

                <div>
                  <!-- Chart -->
                  <div>
                    <canvas id="totalSpend"></canvas>
                  </div>
                  <!-- End Chart -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
            </div>
          </a>
          <!-- End TOTAL SPEND STAT -->
        </div>

        <div class="col-sm-6 col-lg-3 mb-3 mb-lg-5">
          <!-- GIFTS SHIPPED STAT -->
          <a class="card card-hover-shadow h-100" href="#">
            <div class="card-body">
              <h6 class="card-subtitle text-start">Gifts shipped</h6>

              <div class="row align-items-center gx-2 mb-1">
                <div class="col-6">
                  <h2 class="card-title text-inherit text-start fs-1">1,245</h2>
                </div>
                <!-- End Col -->

                <div>
                  <!-- Chart -->
                  <div>
                    <canvas id="giftsShipped"></canvas>
                  </div>
                  <!-- End Chart -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
            </div>
          </a>
          <!-- End GIFTS SHIPPED STAT -->
        </div>

        <div class="col-sm-6 col-lg-3 mb-3 mb-lg-5">
          <!-- SUPPLIERS SUPPORTED STAT -->
          <a class="card card-hover-shadow h-100" href="#">
            <div class="card-body">
              <h6 class="card-subtitle text-start">Suppliers Supported</h6>

              <div class="row align-items-center gx-2 mb-1">
                <div class="col-6">
                  <h2 class="card-title text-inherit text-start">24</h2>
                </div>
                <!-- End Col -->

                <div>
                  <!-- Chart -->
                  <div>
                    <canvas id="totalVendors"></canvas>
                  </div>
                  <!-- End Chart -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
            </div>
          </a>
          <!-- End SUPPLIERS SUPPORTED STAT -->
        </div>
        <div class="col-sm-6 col-lg-3 mb-3 mb-lg-5">
          <!-- ORDERS PLACED STAT -->
          <a class="card card-hover-shadow h-100" href="#">
            <div class="card-body">
              <h6 class="card-subtitle text-start">Orders Placed</h6>

              <div class="row align-items-center gx-2 mb-1">
                <div class="col-6">
                  <h2 class="card-title text-inherit text-start">24</h2>
                </div>
                <!-- End Col -->

                <div>
                  <!-- Chart -->
                  <div>
                    <canvas id="totalOrders"></canvas>
                  </div>
                  <!-- End Chart -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
            </div>
          </a>
          <!-- End ORDERS PLACED STAT -->
        </div>
      </div>
      <!-- End TOP ROW STATS -->

      <!-- PIE/DOUGHNUT CHART ROW -->

      <div class="row">
        <div class="col-lg-6 mb-3 mb-lg-5">
          <!-- GIFTS BY TYPE CHART -->
          <div class="card">
            <!-- Header -->
            <div class="card-header card-header-content-sm-between">
              <h4 class="card-header-title mb-2 mb-sm-0">Gifts by type</h4>
            </div>
            <!-- End Header -->

            <!-- Body -->
            <div class="card-body">
              <!-- Bar Chart -->
              <canvas id="giftsByType"></canvas>
              <!-- End Bar Chart -->
            </div>
            <!-- End Body -->
          </div>
          <!-- END GIFTS BY TYPE CHART -->
        </div>
        <!-- End Col -->
        <div class="col-lg-6 mb-3 mb-lg-0">
          <!-- PRODUCTS BY TYPE CHART -->
          <div class="card">
            <!-- Header -->
            <div class="card-header card-header-content-sm-between">
              <h4 class="card-header-title mb-2 mb-sm-0">
                Products by category
              </h4>
            </div>
            <!-- End Header -->

            <!-- Body -->
            <div class="card-body">
              <canvas id="productsByCategory"></canvas>

              <!-- Chart -->
              <!-- End Chart -->
            </div>
            <!-- End Body -->
          </div>
          <!-- END PRODUCTS BY TYPE CHART -->
        </div>
      </div>
      <!-- END PIE/DOUGHNUT CHART ROW -->

      <!-- SUPPLIER LOCATION CHART -->

      <div class="row">
        <div class="col-lg-12 mb-3 mb-lg-5">
          <!-- Card -->
          <div class="card h-100">
            <!-- Header -->
            <div class="card-header card-header-content-sm-between">
              <h4 class="card-header-title mb-2 mb-sm-0">
                Supplier by location
              </h4>
            </div>
            <!-- End Header -->

            <!-- Body -->
            <div class="card-body">
              <!-- Bar Chart -->
              <canvas id="vendorsByLocal"></canvas>
              <!-- End Bar Chart -->
            </div>
            <!-- End Body -->
          </div>
          <!-- End Card -->
        </div>
        <!-- End Col -->
      </div>
      <!-- END SUPPLIER LOCATION CHART -->
    </div>
    <!-- End Content -->
  </main>
</template>

<script>
// import BarChart from "../charts/BarChart.vue";
import Chart from "chart.js/auto";

export default {
  name: "UserHome",
  components: {
    // BarChart,
  },
  mounted() {
    const totalSpendSelector = document.getElementById("totalSpend");
    const giftsShippedSelector = document.getElementById("giftsShipped");
    const vendorTotalSelector = document.getElementById("totalVendors");
    const ordersTotalSelector = document.getElementById("totalOrders");
    const giftsTypeSelector = document.getElementById("giftsByType");
    const vendorLocalSelector = document.getElementById("vendorsByLocal");
    const productCategorySelector =
      document.getElementById("productsByCategory");

    const totalSpend = new Chart(totalSpendSelector, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Spend",
            borderColor: "rgba(55, 125, 255, 0.9)",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "World population per region (in millions)",
        },
      },
    });
    totalSpend;

    const giftsShipped = new Chart(giftsShippedSelector, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Spend",
            borderColor: "rgba(55, 125, 255, 0.9)",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "World population per region (in millions)",
        },
      },
    });
    giftsShipped;

    const vendorTotal = new Chart(vendorTotalSelector, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Spend",
            borderColor: "rgba(55, 125, 255, 0.9)",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "World population per region (in millions)",
        },
      },
    });
    vendorTotal;

    const orderTotal = new Chart(ordersTotalSelector, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Spend",
            borderColor: "rgba(55, 125, 255, 0.9)",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "World population per region (in millions)",
        },
      },
    });
    orderTotal;

    const giftsByType = new Chart(giftsTypeSelector, {
      type: "pie",
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
            ],
            data: [2478, 5267, 734, 784, 433],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050",
        },
      },
    });
    giftsByType;

    const vendorsByLocal = new Chart(vendorLocalSelector, {
      type: "bar",
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
            ],
            data: [2478, 5267, 734, 784, 433],
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050",
        },
        responsive: true,
        maintainAspectRatio: true,
      },
    });
    vendorsByLocal;

    const productsByCategory = new Chart(productCategorySelector, {
      type: "doughnut",
      data: {
        labels: ["Wellness", "Productivity", "Food & Drink"],
        datasets: [
          {
            label: "Products by category",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
            data: [7, 4, 2],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Testing chart.js",
        },
      },
    });
    productsByCategory;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
