<template>
  <main id="content" role="main" class="main">
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
                  Invoice
                </li>
              </ol>
            </nav>

            <h1 class="page-header-title">Invoice</h1>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Row -->
      </div>
      <!-- End Page Header -->

      <div class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <!-- Card -->
          <div class="card card-lg mb-5">
            <div class="card-body">
              <div class="row justify-content-lg-between">
                <div class="col-sm order-2 order-sm-1 mb-3">
                  <div class="mb-2">
                    <!-- <img
                      class="avatar"
                      src="./assets/svg/logos/logo-short.svg"
                      alt="Logo"
                    /> -->
                  </div>

                  <h1 class="h2 text-primary">Front Inc.</h1>
                </div>
                <!-- End Col -->

                <div class="col-sm-auto order-1 order-sm-2 text-sm-end mb-3">
                  <div class="mb-3">
                    <h2>Invoice #</h2>
                    <span class="d-block">3682303</span>
                  </div>

                  <address class="text-dark">
                    45 Roker Terrace<br />
                    Latheronwheel<br />
                    KW5 8NW, London<br />
                    United Kingdom
                  </address>
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->

              <div class="row justify-content-md-between mb-3">
                <div class="col-md">
                  <h4>Bill to:</h4>
                  <h4>Sara Williams</h4>

                  <address>
                    280 Suzanne Throughway,<br />
                    Breannabury, OR 45801,<br />
                    United States
                  </address>
                </div>
                <!-- End Col -->

                <div class="col-md text-md-end">
                  <dl class="row">
                    <dt class="col-sm-8">Invoice date:</dt>
                    <dd class="col-sm-4">03/10/2018</dd>
                  </dl>
                  <dl class="row">
                    <dt class="col-sm-8">Due date:</dt>
                    <dd class="col-sm-4">03/11/2018</dd>
                  </dl>
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->

              <!-- Table -->
              <div class="table-responsive">
                <table
                  class="table table-borderless table-nowrap table-align-middle"
                >
                  <thead class="thead-light">
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Rate</th>
                      <th class="table-text-end">Amount</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>Design UX and UI</th>
                      <td>1</td>
                      <td>5</td>
                      <td class="table-text-end">$500</td>
                    </tr>

                    <tr>
                      <th>Web project</th>
                      <td>1</td>
                      <td>24</td>
                      <td class="table-text-end">$1250</td>
                    </tr>

                    <tr>
                      <th>SEO</th>
                      <td>1</td>
                      <td>6</td>
                      <td class="table-text-end">$2000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- End Table -->

              <hr class="my-5" />

              <div class="row justify-content-md-end mb-3">
                <div class="col-md-8 col-lg-7">
                  <dl class="row text-sm-end">
                    <dt class="col-sm-6">Subtotal:</dt>
                    <dd class="col-sm-6">$2750.00</dd>
                    <dt class="col-sm-6">Total:</dt>
                    <dd class="col-sm-6">$2750.00</dd>
                    <dt class="col-sm-6">Tax:</dt>
                    <dd class="col-sm-6">$39.00</dd>
                    <dt class="col-sm-6">Amount paid:</dt>
                    <dd class="col-sm-6">$2789.00</dd>
                    <dt class="col-sm-6">Due balance:</dt>
                    <dd class="col-sm-6">$0.00</dd>
                  </dl>
                  <!-- End Row -->
                </div>
              </div>
              <!-- End Row -->

              <div class="mb-3">
                <h3>Thank you!</h3>
                <p>
                  If you have any questions concerning this invoice, use the
                  following contact information:
                </p>
              </div>

              <p class="small mb-0">&copy; 2021 Htmlstream.</p>
            </div>
          </div>
          <!-- End Card -->

          <!-- Footer -->
          <div class="d-flex justify-content-end d-print-none gap-3">
            <a
              class="btn btn-primary"
              href="javascript:;"
              onclick="window.print(); return false;"
            >
              <i class="bi-printer me-1"></i> Print details
            </a>
          </div>
          <!-- End Footer -->
        </div>
      </div>
    </div>
    <!-- End Content -->

    <!-- Footer -->

    <div class="footer">
      <div class="row justify-content-between align-items-center">
        <div class="col">
          <p class="fs-6 mb-0">
            &copy; Bold Xchange, Inc.
            <span class="d-none d-sm-inline-block">2022.</span>
          </p>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Row -->
    </div>

    <!-- End Footer -->
  </main>
</template>

<script>
export default {
  name: "UserInvoice",
  prop: ["_id"],
  data() {
    return {
      selectedInvoice: null,
    };
  },
  computed: {
    invoiceScreenshot() {
      return this.selectedInvoice.invoiceScreenshot;
    },
  },
  created() {
    this.selectedInvoice = this.$store.getters["invoices/invoices"].find(
      (invoice) => invoice._id === this._id
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
