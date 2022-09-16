<template>
  <main id="content" role="main" class="main">
    <!-- Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row align-items-center mb-3">
          <div class="col-md mb-2 mb-md-0">
            <h1 class="page-header-title">Gift Tracking</h1>

            <div class="d-sm-flex mt-2">
              <a
                class="d-inline-block text-body mb-2 mb-sm-0 me-3"
                href="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#exportCustomersModal"
              >
                <i class="bi-download me-1"></i> Export tracking
              </a>
            </div>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Row -->

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
          <ul class="nav nav-tabs page-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">All</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >New</a
              >
            </li>
          </ul>
          <!-- End Nav -->
        </div>
        <!-- End Nav Scroller -->
      </div>
      <!-- End Page Header -->

      <!-- Card -->
      <div class="card">
        <!-- Header -->
        <div class="card-header card-header-content-sm-between">
          <div class="mb-2 mb-sm-0">
            <form>
              <!-- Search -->
              <div class="input-group input-group-merge input-group-flush">
                <div class="input-group-prepend input-group-text">
                  <i class="bi-search"></i>
                </div>
                <input
                  id="datatableSearch"
                  type="search"
                  class="form-control"
                  placeholder="Search recipients"
                  aria-label="Search recipients"
                />
              </div>
              <!-- End Search -->
            </form>
          </div>

          <div
            class="d-grid d-sm-flex justify-content-sm-end align-items-sm-center gap-2"
          >
            <!-- Datatable Info -->
            <div id="datatableCounterInfo" style="display: none">
              <div class="d-flex align-items-center">
                <span class="fs-5 me-3">
                  <span id="datatableCounter">0</span>
                  Selected
                </span>
                <a class="btn btn-outline-danger btn-sm" href="javascript:;">
                  <i class="bi-trash"></i> Delete
                </a>
              </div>
            </div>
            <!-- End Datatable Info -->

            <!-- Dropdown -->
            <div class="dropdown">
              <button
                type="button"
                class="btn btn-white w-100"
                id="showHideDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <i class="bi-table me-1"></i> Columns
              </button>

              <div
                class="dropdown-menu dropdown-menu-end dropdown-card"
                aria-labelledby="showHideDropdown"
                style="width: 15rem"
              >
                <div class="card card-sm">
                  <div class="card-body">
                    <div class="d-grid gap-3">
                      <!-- Form Switch -->
                      <label
                        class="row form-check form-switch"
                        for="toggleColumn_name"
                      >
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Name</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="toggleColumn_name"
                            checked
                          />
                        </span>
                      </label>
                      <!-- End Form Switch -->

                      <!-- Form Switch -->
                      <label
                        class="row form-check form-switch"
                        for="toggleColumn_company"
                      >
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Company</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="toggleColumn_company"
                          />
                        </span>
                      </label>
                      <!-- End Form Switch -->

                      <!-- Form Switch -->
                      <label
                        class="row form-check form-switch"
                        for="toggleColumn_company"
                      >
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Company</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="toggleColumn_company"
                            checked
                          />
                        </span>
                      </label>
                      <!-- End Form Switch -->

                      <!-- Form Switch -->
                      <label
                        class="row form-check form-switch"
                        for="toggleColumn_status"
                      >
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Status</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="toggleColumn_status"
                            checked
                          />
                        </span>
                      </label>
                      <!-- End Form Switch -->

                      <!-- Form Switch -->
                      <label
                        class="row form-check form-switch"
                        for="toggleColumn_state"
                      >
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">State</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="toggleColumn_state"
                          />
                        </span>
                      </label>
                      <!-- End Form Switch -->

                      <!-- Form Switch -->
                      <label
                        class="row form-check form-switch"
                        for="toggleColumn_tracking"
                      >
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Tracking </span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="toggleColumn_tracking"
                            checked
                          />
                        </span>
                      </label>
                      <!-- End Form Switch -->

                      <!-- Form Switch -->
                      <label
                        class="row form-check form-switch"
                        for="toggleColumn_total"
                      >
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Total</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="toggleColumn_total"
                            checked
                          />
                        </span>
                      </label>
                      <!-- End Form Switch -->

                      <!-- Form Switch -->
                      <label
                        class="row form-check form-switch"
                        for="toggleColumn_last_activity"
                      >
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Last activity</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="toggleColumn_last_activity"
                          />
                        </span>
                      </label>
                      <!-- End Form Switch -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Dropdown -->
          </div>
        </div>
        <!-- End Header -->

        <!-- Table -->
        <div class="table-responsive datatable-custom">
          <table
            id="datatable"
            class="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
            data-hs-datatables-options='{
                   "columnDefs": [{
                      "targets": [0],
                      "orderable": false
                    }],
                   "order": [],
                   "info": {
                     "totalQty": "#datatableWithPaginationInfoTotalQty"
                   },
                   "search": "#datatableSearch",
                   "entries": "#datatableEntries",
                   "pageLength": 15,
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
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="datatableCheckAll"
                    />
                    <label
                      class="form-check-label"
                      for="datatableCheckAll"
                    ></label>
                  </div>
                </th>
                <th class="table-column-ps-0">Name</th>
                <th>Company</th>
                <th>Company</th>
                <th>Status</th>
                <th>State</th>
                <th>Tracking</th>
                <th>Total</th>
                <th>Last activity</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck1"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck1"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-circle">
                        <img
                          class="avatar-img"
                          :src="img10"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit"
                        >Amanda Harvey
                        <i
                          class="bi-patch-check-fill text-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Top endorsed"
                        ></i
                      ></span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-202-555-0140</td>
                <td>
                  <span class="legend-indicator bg-success"></span>Delivered
                </td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$65.00</td>
                <td>Aug 17, 2020, 5:48 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck2"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck2"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-primary avatar-circle">
                        <span class="avatar-initials">A</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Anne Richard</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-752-235-2353</td>
                <td>
                  <span class="legend-indicator bg-success"></span>Delivered
                </td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$235.00</td>
                <td>Aug 17, 2020, 2:01 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck3"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck3"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-circle">
                        <img
                          class="avatar-img"
                          :src="img3"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">David Harrison</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-235-364-2611</td>
                <td>
                  <span class="legend-indicator bg-success"></span>Delivered
                </td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$135.00</td>
                <td>Aug 17, 2020, 1:55 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck4"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck4"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-circle">
                        <img
                          class="avatar-img"
                          :src="img5"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Finch Hoot</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-743-632-9574</td>
                <td>
                  <span class="legend-indicator bg-warning"></span>In Transit
                </td>
                <td>
                  <span class="legend-indicator bg-warning"></span>In Transit
                </td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$135.00</td>
                <td>Aug 17, 2020, 1:54 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck5"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck5"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-dark avatar-circle">
                        <span class="avatar-initials">B</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Bob Dean</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-854-235-9755</td>
                <td>
                  <span class="legend-indicator bg-warning"></span>In Transit
                </td>
                <td>
                  <span class="legend-indicator bg-warning"></span>In Transit
                </td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$135.00</td>
                <td>Aug 17, 2020, 1:04 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck6"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck6"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-circle">
                        <img
                          class="avatar-img"
                          :src="img9"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit"
                        >Ella Lauda
                        <i
                          class="bi-patch-check-fill text-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Top endorsed"
                        ></i
                      ></span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-846-157-2423</td>
                <td>
                  <span class="legend-indicator bg-warning"></span>In Transit
                </td>
                <td>
                  <span class="legend-indicator bg-warning"></span>In Transit
                </td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$65.00</td>
                <td>Aug 17, 2020, 1:01 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck7"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck7"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-info avatar-circle">
                        <span class="avatar-initials">L</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Lori Hunter</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-844-235-4378</td>
                <td>
                  <span class="legend-indicator bg-danger"></span>Processing
                </td>
                <td>
                  <span class="legend-indicator bg-danger"></span>Processing
                </td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$65.00</td>
                <td>Aug 17, 2020, 12:56 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck16"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck16"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-primary avatar-circle">
                        <span class="avatar-initials">M</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Mark Colbert</span>
                    </div>
                  </a>
                </td>
                <td>mark@site.com</td>
                <td>+1-235-235-7482</td>
                <td>
                  <span class="legend-indicator bg-danger"></span>Processing
                </td>
                <td>
                  <span class="legend-indicator bg-danger"></span>Processing
                </td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$235.00</td>
                <td>Aug 17, 2020, 12:54 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck9"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck9"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-circle">
                        <img
                          class="avatar-img"
                          :src="img6"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Costa Quinn</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-543-346-6343</td>
                <td>
                  <span class="legend-indicator bg-danger"></span>Processing
                </td>
                <td>
                  <span class="legend-indicator bg-danger"></span>Processing
                </td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$235.00</td>
                <td>Aug 17, 2020, 12:48 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck10"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck10"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-danger avatar-circle">
                        <span class="avatar-initials">R</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit"
                        >Rachel Doe
                        <i
                          class="bi-patch-check-fill text-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Top endorsed"
                        ></i
                      ></span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-232-643-3643</td>
                <td>
                  <span class="legend-indicator bg-success"></span>Delivered
                </td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$65.00</td>
                <td>Aug 17, 2020, 12:41 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck11"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck11"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-circle">
                        <img
                          class="avatar-img"
                          :src="img8"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Linda Bates</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-123-523-5433</td>
                <td>
                  <span class="legend-indicator bg-success"></span>Delivered
                </td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$65.00</td>
                <td>Aug 17, 2020, 12:36 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck12"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck12"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-info avatar-circle">
                        <span class="avatar-initials">B</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Brian Halligan</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-141-463-1512</td>
                <td>
                  <span class="legend-indicator bg-success"></span>Delivered
                </td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$65.00</td>
                <td>Aug 17, 2020, 12:25 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck13"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck13"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-dark avatar-circle">
                        <span class="avatar-initials">C</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Chris Mathew</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-253-463-1242</td>
                <td>
                  <span class="legend-indicator bg-success"></span>Delivered
                </td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$65.00</td>
                <td>Aug 16, 2020, 4:31 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck14"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck14"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-circle">
                        <img
                          class="avatar-img"
                          :src="img7"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit"
                        >Clarice Boone
                        <i
                          class="bi-patch-check-fill text-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Top endorsed"
                        ></i
                      ></span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-532-325-3253</td>
                <td>
                  <span class="legend-indicator bg-success"></span>Delivered
                </td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$65.00</td>
                <td>Aug 16, 2020, 3:26 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck15"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck15"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-dark avatar-circle">
                        <span class="avatar-initials">L</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Lewis Clarke</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-235-235-2355</td>
                <td>
                  <span class="legend-indicator bg-success"></span>Delivered
                </td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  <span> <a href="#">IZAB00000000000000</a></span>
                </td>
                <td>$235.00</td>
                <td>Aug 16, 2020, 2:54 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck8"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck8"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-circle">
                        <img
                          class="avatar-img"
                          :src="img4"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Sam Kart</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-457-745-7555</td>
                <td>Canada</td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  62
                  <span class="badge bg-soft-dark text-dark ms-1"
                    >+9 today</span
                  >
                </td>
                <td>$235.00</td>
                <td>Aug 16, 2020, 2:48 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck17"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck17"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-danger avatar-circle">
                        <span class="avatar-initials">J</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Johnny Appleseed</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-457-734-4544</td>
                <td>United States</td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>30</td>
                <td>$235.00</td>
                <td>Aug 16, 2020, 2:40 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck18"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck18"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-danger avatar-circle">
                        <span class="avatar-initials">P</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Phileas Fogg</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-065-084-8658</td>
                <td>Spain</td>
                <td>
                  <span class="legend-indicator bg-danger"></span>Disabled
                </td>
                <td>10</td>
                <td>$135.00</td>
                <td>Aug 16, 2020, 1:59 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck19"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck19"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-circle">
                        <img
                          class="avatar-img"
                          :src="img6"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit"
                        >Mark Williams
                        <i
                          class="bi-patch-check-fill text-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Top endorsed"
                        ></i
                      ></span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-340-055-4733</td>
                <td>United Kingdom</td>
                <td>
                  <span class="legend-indicator bg-danger"></span>Disabled
                </td>
                <td>7</td>
                <td>$65.00</td>
                <td>Aug 16, 2020, 1:55 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck20"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck20"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-dark avatar-circle">
                        <span class="avatar-initials">T</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Timothy Silva</span>
                    </div>
                  </a>
                </td>
                <td>Example Company</td>
                <td>+1-083-642-4673</td>
                <td>Italy</td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>9</td>
                <td>$65.00</td>
                <td>Aug 16, 2020, 1:15 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck21"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck21"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-dark avatar-circle">
                        <span class="avatar-initials">G</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit"
                        >Gary Bishop
                        <i
                          class="bi-patch-check-fill text-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Top endorsed"
                        ></i
                      ></span>
                    </div>
                  </a>
                </td>
                <td>gary@site.com</td>
                <td>+1-325-547-5683</td>
                <td>Latvia</td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>
                  6
                  <span class="badge bg-soft-dark text-dark ms-1"
                    >+1 today</span
                  >
                </td>
                <td>$2,120.29</td>
                <td>Aug 16, 2020, 1:15 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck22"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck22"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-dark avatar-circle">
                        <span class="avatar-initials">Y</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Yorker Scogings</span>
                    </div>
                  </a>
                </td>
                <td>yorker@site.com</td>
                <td>+1-954-236-3235</td>
                <td>Norway</td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>3</td>
                <td>$882.00</td>
                <td>Aug 16, 2020, 1:15 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck23"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck23"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-info avatar-circle">
                        <span class="avatar-initials">F</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Frank Phillips</span>
                    </div>
                  </a>
                </td>
                <td>frank@site.com</td>
                <td>+1-253-574-3422</td>
                <td>Norway</td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>1</td>
                <td>$92.00</td>
                <td>Aug 16, 2020, 1:15 (ET)</td>
              </tr>

              <tr>
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="usersDataCheck24"
                    />
                    <label
                      class="form-check-label"
                      for="usersDataCheck24"
                    ></label>
                  </div>
                </td>
                <td class="table-column-ps-0">
                  <a
                    class="d-flex align-items-center"
                    href="./ecommerce-customer-details.html"
                  >
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-soft-primary avatar-circle">
                        <span class="avatar-initials">E</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="h5 text-inherit">Elizabeth Carter</span>
                    </div>
                  </a>
                </td>
                <td>eliz@site.com</td>
                <td>+1-800-724-3303</td>
                <td>United States</td>
                <td><span class="legend-indicator bg-success"></span>Active</td>
                <td>2</td>
                <td>$50.00</td>
                <td>Aug 16, 2020, 1:15 (ET)</td>
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
                    <option value="10">10</option>
                    <option value="15" selected>15</option>
                    <option value="20">20</option>
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
              <div class="d-flex justify-content-center justify-content-sm-end">
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
import img3 from "../../../assets/img/160x160/img3.jpg";
import img4 from "../../../assets/img/160x160/img4.jpg";
import img5 from "../../../assets/img/160x160/img5.jpg";
import img6 from "../../../assets/img/160x160/img6.jpg";
import img7 from "../../../assets/img/160x160/img7.jpg";
import img8 from "../../../assets/img/160x160/img8.jpg";
import img9 from "../../../assets/img/160x160/img9.jpg";
import img10 from "../../../assets/img/160x160/img10.jpg";

export default {
  name: "GiftTracking",
  data() {
    return { img3, img4, img5, img6, img7, img8, img9, img10 };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
