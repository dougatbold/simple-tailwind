<template>
  <main id="content" role="main" class="main mt-10">
    <!-- Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <div class="page-header d-print-none">
        <div class="row align-items-end">
          <div class="col-sm mb-2 mb-sm-0">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-no-gutter">
                <li class="breadcrumb-item">
                  <a class="breadcrumb-link" href="javascript:;">Pages</a>
                </li>
                <li class="breadcrumb-item">
                  <a class="breadcrumb-link" href="javascript:;">Account</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Invoices
                </li>
              </ol>
            </nav>

            <h1 class="page-header-title mt-5 text-start">Invoices</h1>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Row -->
      </div>
      <!-- End Page Header -->

      <div class="row">
        <div class="col-lg-12">
          <!-- Card -->
          <div class="card d-print-none">
            <!-- Header -->
            <div class="card-header card-header-content-between">
              <h4 class="card-header-title">Invoice History</h4>
            </div>
            <!-- End Header -->

            <hr class="my-0" />

            <!-- Body -->
            <div class="card-body">
              <!-- Nav Scroller -->
              <div class="js-nav-scroller hs-nav-scroller-horizontal">
                <span class="hs-nav-scroller-arrow-prev" style="display: none">
                  <a class="hs-nav-scroller-arrow-link" href="javascript:;">
                    <i class="bi-chevron-left"></i>
                  </a>
                </span>

                <span class="hs-nav-scroller-arrow-next" style="display: none">
                  <a class="hs-nav-scroller-arrow-link" href="javascript:;">
                    <i class="bi-chevron-right"></i>
                  </a>
                </span>
              </div>
              <!-- End Nav Scroller -->
            </div>
            <!-- End Body -->

            <hr class="my-0" />

            <!-- Body -->
            <div class="card-body card-body-height">
              <!-- Tab Content -->
              <div class="tab-content" id="invoicesStatusTabContent">
                <div
                  class="tab-pane fade show active"
                  id="paid"
                  role="tabpanel"
                  aria-labelledby="paid-tab"
                >
                  <!-- List Group -->
                  <ul
                    class="list-group list-group-flush list-group-no-gutters"
                    v-if="hasInvoices"
                  >
                    <!-- List Item -->
                    <li
                      class="list-group-item"
                      v-for="invoice in getInvoices"
                      :key="invoice._id"
                    >
                      <router-link to="account-invoice">
                        <div class="mb-1 text-start">
                          <h5 class="mb-0">{{ invoice.title }}</h5>
                          <span class="fs-5 text-start">{{
                            invoice.invoicedCompany
                          }}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                          <span class="h4 text-primary">{{
                            invoice.total
                          }}</span>
                          <span class="fs-5">{{ invoice.dateInvoiced }}</span>
                        </div>
                      </router-link>
                    </li>
                    <!-- End List Item -->
                  </ul>
                  <h3 v-else class="text-start">No invoices found.</h3>
                  <!-- End List Group -->
                </div>
              </div>
              <!-- End Tab Content -->
            </div>
            <!-- End Body -->
          </div>
          <!-- End Card -->
        </div>
      </div>
    </div>
    <!-- End Content -->
  </main>
</template>

<script>
export default {
  name: "UserInvoices",
  computed: {
    getInvoices() {
      return this.$store.getters["invoices/invoices"];
    },
    hasInvoices() {
      return this.$store.getters["invoices/hasInvoices"];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
