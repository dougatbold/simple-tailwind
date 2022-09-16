<template>
  <main id="content" role="main" class="main">
    <!-- Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row align-items-center">
          <div class="col-sm mb-2 mb-sm-0">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-no-gutter">
                <li class="breadcrumb-item">
                  <a class="breadcrumb-link" href="./ecommerce-customers.html"
                    >Gift Recipients</a
                  >
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Anne Richard Details
                </li>
              </ol>
            </nav>

            <h1 class="page-header-title">Anne Richard</h1>
          </div>
          <!-- End Col -->

          <div class="col-sm-auto">
            <div class="d-flex gap-2">
              <button
                type="button"
                class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Previous recipient"
              >
                <i class="bi-arrow-left"></i>
              </button>
              <button
                type="button"
                class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Next recipient"
              >
                <i class="bi-arrow-right"></i>
              </button>
            </div>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Row -->
      </div>
      <!-- End Page Header -->

      <div class="row">
        <div class="col-lg-8">
          <!-- Card -->
          <div class="card mb-3 mb-lg-5">
            <!-- Body -->
            <div class="card-body">
              <!-- Media -->
              <div class="d-flex align-items-center mb-5">
                <div class="flex-shrink-0">
                  <div class="avatar avatar-lg avatar-circle">
                    <img
                      class="avatar-img"
                      :src="img9"
                      alt="Image Description"
                    />
                  </div>
                </div>

                <div class="flex-grow-1 mx-3">
                  <div class="d-flex mb-1">
                    <h3 class="mb-0 me-3">Anne Richard</h3>

                    <!-- Dropdown -->
                    <div
                      class="dropdown"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit"
                    >
                      <button
                        type="button"
                        class="btn btn-white btn-icon btn-xs rounded-circle"
                        id="editDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi-pencil-fill"></i>
                      </button>

                      <div
                        class="dropdown-menu dropdown-card mt-1"
                        aria-labelledby="editDropdown"
                        style="min-width: 20rem"
                      >
                        <!-- Card -->
                        <div class="card">
                          <div class="card-body">
                            <div class="row gx-3">
                              <div class="col-sm-6 mb-3 mb-sm-0">
                                <label for="firstNameLabel" class="form-label"
                                  >First name</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  name="firstName"
                                  id="firstNameLabel"
                                  placeholder="Clarice"
                                  aria-label="Clarice"
                                  value="Anna"
                                />
                              </div>
                              <!-- End Col -->

                              <div class="col-sm-6">
                                <label for="lastNameLabel" class="form-label"
                                  >Last name</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  name="lastName"
                                  id="lastNameLabel"
                                  placeholder="Boone"
                                  aria-label="Boone"
                                  value="Richard"
                                />
                              </div>
                              <!-- End Col -->
                            </div>
                            <!-- End Row -->

                            <div class="d-flex justify-content-end gap-2 mt-3">
                              <button
                                type="button"
                                class="btn btn-white btn-sm"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary btn-sm"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <!-- End Body -->
                      </div>
                    </div>
                    <!-- End Dropdown -->
                  </div>
                </div>

                <div class="d-none d-sm-inline-block ms-auto text-end"></div>
              </div>
              <!-- End Media -->

              <label class="form-label">Customer note</label>

              <!-- Quill -->
              <div class="quill-custom">
                <div
                  class="js-quill"
                  style="height: 15rem"
                  data-hs-quill-options='{
                     "placeholder": "Type your description...",
                      "modules": {
                        "toolbar": [
                          ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
                        ]
                      }
                     }'
                ></div>
              </div>
              <!-- End Quill -->
            </div>
            <!-- Body -->

            <!-- Footer -->
            <div class="card-footer">
              <div class="d-flex justify-content-end gap-3">
                <button type="submit" class="btn btn-white">Discard</button>
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
            <!-- End Footer -->
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card mb-3 mb-lg-5">
            <!-- Header -->
            <div class="card-header card-header-content-sm-between">
              <div class="d-grid gap-2 mb-2 mb-sm-0">
                <h4 class="card-header-title">Gifts sent</h4>

                <!-- Datatable Info -->
                <div id="datatableCounterInfo" style="display: none">
                  <div class="d-flex align-items-center">
                    <span class="fs-5 me-3">
                      <span id="datatableCounter">0</span>
                      Selected
                    </span>
                    <a
                      class="btn btn-outline-danger btn-sm"
                      href="javascript:;"
                    >
                      <i class="bi-trash"></i> Delete
                    </a>
                  </div>
                </div>
                <!-- End Datatable Info -->
              </div>

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

                <!-- Nav -->
                <ul class="nav nav-segment nav-fill">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">All gifts</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link disabled"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                      >Open</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link disabled"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                      >Unfulfilled</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link disabled"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                      >Unpaid</a
                    >
                  </li>
                </ul>
                <!-- End Nav -->
              </div>
              <!-- End Nav Scroller -->
            </div>
            <!-- End Header -->

            <!-- Body -->
            <div class="card-body">
              <!-- Input Group -->
              <div class="input-group input-group-merge">
                <div class="input-group-prepend input-group-text">
                  <i class="bi-search"></i>
                </div>

                <input
                  id="datatableSearch"
                  type="search"
                  class="form-control"
                  placeholder="Search orders"
                  aria-label="Search orders"
                />
              </div>
              <!-- End Input Group -->
            </div>
            <!-- End Body -->

            <!-- Table -->
            <div class="table-responsive datatable-custom">
              <table
                id="datatable"
                class="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                data-hs-datatables-options='{
                       "columnDefs": [{
                          "targets": [0, 5],
                          "orderable": false
                        }],
                       "order": [],
                       "info": {
                         "totalQty": "#datatableWithPaginationInfoTotalQty"
                       },
                       "search": "#datatableSearch",
                       "entries": "#datatableEntries",
                       "pageLength": 12,
                       "isResponsive": false,
                       "isShowPaging": false,
                       "pagination": "datatablePagination"
                     }'
              >
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          id="datatableCheckAll"
                          type="checkbox"
                          class="form-check-input"
                        />
                        <label
                          class="form-check-label"
                          for="datatableCheckAll"
                        ></label>
                      </div>
                    </th>
                    <th class="table-column-ps-0">Gift</th>
                    <th>Date</th>
                    <th>Payment status</th>
                    <th>Total</th>
                    <th>Invoice</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck1"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck1"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a href="./ecommerce-order-details.html">#35463</a>
                    </td>
                    <td>Aug 17, 2020</td>
                    <td>
                      <span class="badge bg-soft-success text-success">
                        <span class="legend-indicator bg-success"></span>Paid
                      </span>
                    </td>
                    <td>$256.39</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck2"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck2"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a href="./ecommerce-order-details.html">#23513</a>
                    </td>
                    <td>Aug 17, 2020</td>
                    <td>
                      <span class="badge bg-soft-success text-success">
                        <span class="legend-indicator bg-success"></span>Paid
                      </span>
                    </td>
                    <td>$2,125.00</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck3"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck3"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a href="./ecommerce-order-details.html">#62311</a>
                    </td>
                    <td>Aug 03, 2020</td>
                    <td>
                      <span class="badge bg-soft-success text-success">
                        <span class="legend-indicator bg-success"></span>Paid
                      </span>
                    </td>
                    <td>$532.99</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck4"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck4"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a href="./ecommerce-order-details.html">#12453</a>
                    </td>
                    <td>July 29, 2020</td>
                    <td>
                      <span class="badge bg-soft-warning text-warning">
                        <span class="legend-indicator bg-warning"></span>Pending
                      </span>
                    </td>
                    <td>$1,035.02</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck5"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck5"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a href="./ecommerce-order-details.html">#84223</a>
                    </td>
                    <td>July 11, 2020</td>
                    <td>
                      <span class="badge bg-soft-success text-success">
                        <span class="legend-indicator bg-success"></span>Paid
                      </span>
                    </td>
                    <td>$68.53</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck6"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck6"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a href="./ecommerce-order-details.html">#46542</a>
                    </td>
                    <td>July 04, 2020</td>
                    <td>
                      <span class="badge bg-soft-success text-success">
                        <span class="legend-indicator bg-success"></span>Paid
                      </span>
                    </td>
                    <td>$100.00</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck7"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck7"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a
                        class="text-danger"
                        href="./ecommerce-order-details.html"
                        >#35378</a
                      >
                      <i class="tio-warning text-warning"></i>
                    </td>
                    <td>June 27, 2020</td>
                    <td>
                      <span class="badge bg-soft-warning text-warning">
                        <span class="legend-indicator bg-warning"></span>Pending
                      </span>
                    </td>
                    <td class="text-danger">$89.46</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck8"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck8"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a
                        class="text-danger"
                        href="./ecommerce-order-details.html"
                        >#24562</a
                      >
                      <i class="tio-warning text-warning"></i>
                    </td>
                    <td>June 15, 2020</td>
                    <td>
                      <span class="badge bg-soft-warning text-warning">
                        <span class="legend-indicator bg-warning"></span>Pending
                      </span>
                    </td>
                    <td class="text-danger">$3,535.46</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck9"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck9"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a href="./ecommerce-order-details.html">#78531</a>
                    </td>
                    <td>June 12, 2020</td>
                    <td>
                      <span class="badge bg-soft-success text-success">
                        <span class="legend-indicator bg-success"></span>Paid
                      </span>
                    </td>
                    <td>$23.89</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck10"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck10"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a href="./ecommerce-order-details.html">#34634</a>
                    </td>
                    <td>June 02, 2020</td>
                    <td>
                      <span class="badge bg-soft-success text-success">
                        <span class="legend-indicator bg-success"></span>Paid
                      </span>
                    </td>
                    <td>$77.00</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck11"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck11"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a
                        class="text-danger"
                        href="./ecommerce-order-details.html"
                        >#93817</a
                      >
                      <i class="tio-warning text-warning"></i>
                    </td>
                    <td>May 30, 2020</td>
                    <td>
                      <span class="badge bg-soft-warning text-warning">
                        <span class="legend-indicator bg-warning"></span>Pending
                      </span>
                    </td>
                    <td class="text-danger">$77.00</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck12"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck12"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a href="./ecommerce-order-details.html">#43113</a>
                    </td>
                    <td>May 25, 2020</td>
                    <td>
                      <span class="badge bg-soft-success text-success">
                        <span class="legend-indicator bg-success"></span>Paid
                      </span>
                    </td>
                    <td>$1,421.47</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-column-pe-0">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ordersCheck13"
                        />
                        <label
                          class="form-check-label"
                          for="ordersCheck13"
                        ></label>
                      </div>
                    </td>
                    <td class="table-column-ps-0">
                      <a href="./ecommerce-order-details.html">#12412</a>
                    </td>
                    <td>May 16, 2020</td>
                    <td>
                      <span class="badge bg-soft-success text-success">
                        <span class="legend-indicator bg-success"></span>Paid
                      </span>
                    </td>
                    <td>$45.00</td>
                    <td>
                      <a
                        class="btn btn-white btn-sm"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#accountInvoiceReceiptModal"
                      >
                        <i class="bi-receipt me-1"></i> Invoice
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- End Table -->

            <!-- Footer -->
            <div class="card-footer">
              <div
                class="row justify-content-center justify-content-sm-between align-items-sm-center"
              >
                <div class="col-sm mb-2 mb-sm-0">
                  <div
                    class="d-flex justify-content-center justify-content-sm-start align-items-center"
                  >
                    <span class="me-2">Showing:</span>

                    <!-- Select -->
                    <div class="tom-select-custom">
                      <select
                        id="datatableEntries"
                        class="js-select form-select form-select-borderless w-auto"
                        autocomplete="off"
                        data-hs-tom-select-options='{
                                "searchInDropdown": false,
                                "hideSearch": true
                              }'
                      >
                        <option value="12">12</option>
                        <option value="14" selected>14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                      </select>
                    </div>
                    <!-- End Select -->

                    <span class="text-secondary me-2">of</span>

                    <!-- Pagination Quantity -->
                    <span id="datatableWithPaginationInfoTotalQty"></span>
                  </div>
                </div>
                <!-- End Col -->

                <div class="col-sm-auto">
                  <div
                    class="d-flex justify-content-center justify-content-sm-end"
                  >
                    <!-- Pagination -->
                    <nav
                      id="datatablePagination"
                      aria-label="Activity pagination"
                    ></nav>
                  </div>
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
            </div>
            <!-- End Footer -->
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card mb-3 mb-lg-5">
            <!-- Header -->
            <div class="card-header card-header-content-between">
              <h4 class="card-header-title">Timeline</h4>

              <!-- Checkbox -->
              <div class="form-check">
                <input
                  id="showCommentsCheckbox"
                  type="checkbox"
                  class="form-check-input"
                  checked
                />
                <label class="form-check-label" for="showCommentsCheckbox"
                  >Show comments</label
                >
              </div>
              <!-- End Checkbox -->
            </div>
            <!-- End Header -->

            <!-- Body -->
            <div class="card-body">
              <!-- Step -->
              <ul class="step step-icon-sm">
                <!-- Step Item -->
                <li class="step-item">
                  <div class="step-content-wrapper">
                    <span class="step-icon step-icon-soft-primary">A</span>

                    <!-- Quill -->
                    <div class="quill-custom">
                      <div
                        class="js-quill-step"
                        style="height: 15rem"
                        data-hs-quill-options='{
                           "placeholder": "Type your description...",
                            "modules": {
                              "toolbar": [
                                ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
                              ]
                            }
                           }'
                      ></div>
                    </div>
                    <!-- End Quill -->
                  </div>
                </li>
                <!-- End Step Item -->

                <!-- Step Item -->
                <li class="step-item">
                  <div class="step-content-wrapper">
                    <small class="step-divider">Wednesday, 19 August</small>
                  </div>
                </li>
                <!-- End Step Item -->

                <!-- Step Item -->
                <li class="step-item">
                  <div class="step-content-wrapper">
                    <span
                      class="step-icon step-icon-soft-dark step-icon-pseudo"
                    ></span>

                    <div class="step-content">
                      <h5 class="mb-0">
                        You submitted a customer data request.
                      </h5>
                      <p class="fs-5 mb-0">10:19 AM</p>
                    </div>
                  </div>
                </li>
                <!-- End Step Item -->

                <!-- Step Item -->
                <li class="step-item">
                  <div class="step-content-wrapper">
                    <span
                      class="step-icon step-icon-soft-dark step-icon-pseudo"
                    ></span>

                    <div class="step-content">
                      <h5 class="mb-0">
                        You added the email anne@gmail.com to this customer.
                      </h5>
                      <p class="fs-5 mb-0">10:18 AM</p>
                    </div>
                  </div>
                </li>
                <!-- End Step Item -->

                <!-- Step Item -->
                <li class="step-item">
                  <div class="step-content-wrapper">
                    <span
                      class="step-icon step-icon-soft-dark step-icon-pseudo"
                    ></span>

                    <div class="step-content">
                      <h5 class="mb-0">You created this customer.</h5>
                      <p class="fs-5 mb-0">10:18 AM</p>
                    </div>
                  </div>
                </li>
                <!-- End Step Item -->
              </ul>
              <!-- End Step -->
            </div>
            <!-- End Body -->
          </div>
          <!-- End Card -->

          <div class="d-none d-lg-block">
            <button type="button" class="btn btn-danger">
              Delete recipient
            </button>
          </div>
        </div>

        <div class="col-lg-4">
          <!-- Card -->
          <div class="card mb-3 mb-lg-5">
            <!-- Body -->
            <div class="card-body">
              <!-- List Group -->
              <ul class="list-group list-group-flush list-group-no-gutters">
                <li class="list-group-item">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h5>Contact info</h5>
                    <a class="link" href="javascript:;">Edit</a>
                  </div>

                  <ul class="list-unstyled list-py-2 text-body">
                    <li><i class="bi-at me-2"></i>ella@site.com</li>
                    <li><i class="bi-phone me-2"></i>+1 (609) 972-22-22</li>
                  </ul>
                </li>

                <li class="list-group-item">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h5>Shipping address</h5>
                    <a class="link" href="javascript:;">Edit</a>
                  </div>

                  <!-- Leaflet (Map) -->
                  <div
                    id="map"
                    class="leaflet-custom rounded mt-1 mb-3"
                    style="min-height: 10rem"
                    data-hs-leaflet-options='{
                         "map": {
                           "scrollWheelZoom": false,
                           "coords": [37.4040344, -122.0289704]
                         },
                         "marker": [
                           {
                             "coords": [37.4040344, -122.0289704],
                             "icon": {
                               "iconUrl": "./assets/svg/components/map-pin.svg",
                               "iconSize": [50, 45]
                             },
                             "popup": {
                               "text": "153 Williamson Plaza, Maggieberg"
                             }
                           }
                         ]
                        }'
                  ></div>
                  <!-- End Leaflet (Map) -->

                  <span class="d-block text-body">
                    45 Roker Terrace<br />
                    Latheronwheel<br />
                    KW5 8NW, London<br />
                    UK
                    <!-- <img
                      class="avatar avatar-xss avatar-circle ms-1"
                      src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg"
                      alt="Great Britain Flag"
                    /> -->
                  </span>
                </li>

                <li class="list-group-item"></li>
              </ul>
              <!-- End List Group -->
            </div>
            <!-- End Body -->
          </div>
          <!-- End Card -->
        </div>
      </div>
      <!-- End Row -->

      <div class="d-lg-none">
        <button type="button" class="btn btn-danger">Delete customer</button>
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
import img9 from "../../../assets/img/160x160/img9.jpg";

export default {
  name: "GiftRecipientDetails",
  data() {
    return { img9 };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
