<template>
  <main id="content" role="main" class="main">
    <!-- Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <div class="page-header">
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
                  Settings
                </li>
              </ol>
            </nav>

            <h1 class="page-header-title">Settings</h1>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Row -->
      </div>
      <!-- End Page Header -->

      <div class="row">
        <div class="col-lg-3">
          <!-- Navbar -->
          <div class="navbar-expand-lg navbar-vertical mb-3 mb-lg-5">
            <!-- Navbar Toggle -->
            <!-- Navbar Toggle -->
            <div class="d-grid">
              <button
                type="button"
                class="navbar-toggler btn btn-white mb-3"
                data-bs-toggle="collapse"
                data-bs-target="#navbarVerticalNavMenu"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navbarVerticalNavMenu"
              >
                <span class="d-flex justify-content-between align-items-center">
                  <span class="text-dark">Menu</span>

                  <span class="navbar-toggler-default">
                    <i class="bi-list"></i>
                  </span>

                  <span class="navbar-toggler-toggled">
                    <i class="bi-x"></i>
                  </span>
                </span>
              </button>
            </div>
            <!-- End Navbar Toggle -->
            <!-- End Navbar Toggle -->

            <!-- Navbar Collapse -->
            <div id="navbarVerticalNavMenu" class="collapse navbar-collapse">
              <ul
                id="navbarSettings"
                class="js-sticky-block js-scrollspy card card-navbar-nav nav nav-tabs nav-lg nav-vertical"
                data-hs-sticky-block-options='{
                     "parentSelector": "#navbarVerticalNavMenu",
                     "targetSelector": "#header",
                     "breakpoint": "lg",
                     "startPoint": "#navbarVerticalNavMenu",
                     "endPoint": "#stickyBlockEndPoint",
                     "stickyOffsetTop": 20
                   }'
              >
                <li class="nav-item">
                  <a class="nav-link active" href="#content">
                    <b-icon-person class="nav-icon"></b-icon-person> Basic
                    information
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#emailSection">
                    <b-icon-at class="nav-icon"></b-icon-at> Email
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#passwordSection">
                    <b-icon-key class="nav-icon"></b-icon-key> Password
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#billingSection">
                    <b-icon-credit-card class="nav-icon"></b-icon-credit-card>
                    Billing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#deleteAccountSection">
                    <b-icon-trash class="nav-icon"></b-icon-trash> Delete
                    account
                  </a>
                </li>
              </ul>
            </div>
            <!-- End Navbar Collapse -->
          </div>
          <!-- End Navbar -->
        </div>

        <div class="col-lg-9">
          <div class="d-grid gap-3 gap-lg-5">
            <!-- Card -->
            <div class="card">
              <!-- Profile Cover -->
              <div class="profile-cover">
                <div class="profile-cover-img-wrapper">
                  <!-- <img
                    id="profileCoverImg"
                    class="profile-cover-img"
                    src="./assets/img/1920x400/img2.jpg"
                    alt="Image Description"
                  /> -->

                  <!-- Custom File Cover -->
                  <div class="profile-cover-content profile-cover-uploader p-3">
                    <input
                      type="file"
                      class="js-file-attach profile-cover-uploader-input"
                      id="profileCoverUplaoder"
                      data-hs-file-attach-options='{
                                "textTarget": "#profileCoverImg",
                                "mode": "image",
                                "targetAttr": "src",
                                "allowTypes": [".png", ".jpeg", ".jpg"]
                             }'
                    />
                    <label
                      class="profile-cover-uploader-label btn btn-sm btn-white"
                      for="profileCoverUplaoder"
                    >
                      <i class="bi-camera-fill"></i>
                      <span class="d-none d-sm-inline-block ms-1"
                        >Upload header</span
                      >
                    </label>
                  </div>
                  <!-- End Custom File Cover -->
                </div>
              </div>
              <!-- End Profile Cover -->

              <!-- Avatar -->
              <label
                class="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar"
                for="editAvatarUploaderModal"
              >
                <!-- <img
                  id="editAvatarImgModal"
                  class="avatar-img"
                  src="./assets/img/160x160/img6.jpg"
                  alt="Image Description"
                /> -->

                <input
                  type="file"
                  class="js-file-attach avatar-uploader-input"
                  id="editAvatarUploaderModal"
                  data-hs-file-attach-options='{
                            "textTarget": "#editAvatarImgModal",
                            "mode": "image",
                            "targetAttr": "src",
                            "allowTypes": [".png", ".jpeg", ".jpg"]
                         }'
                />

                <span class="avatar-uploader-trigger">
                  <i class="bi-pencil-fill avatar-uploader-icon shadow-sm"></i>
                </span>
              </label>
              <!-- End Avatar -->
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div class="card">
              <div class="card-header">
                <h2 class="card-title h4 text-start">Basic information</h2>
              </div>

              <!-- Body -->
              <div class="card-body">
                <!-- Form -->
                <form>
                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="firstNameLabel"
                      class="col-sm-3 col-form-label form-label text-start"
                      >Full name
                      <i
                        class="bi-question-circle text-body ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Displayed on public forums, such as Front."
                      ></i
                    ></label>

                    <div class="col-sm-9">
                      <div class="input-group input-group-sm-vertical">
                        <input
                          type="text"
                          class="form-control"
                          name="firstName"
                          id="firstName"
                          placeholder="Your first name"
                          aria-label="Your first name"
                          value="Mark"
                        />
                        <input
                          type="text"
                          class="form-control"
                          name="lastName"
                          id="lastName"
                          placeholder="Your last name"
                          aria-label="Your last name"
                          value="Williams"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- End Form -->

                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="emailLabel"
                      class="col-sm-3 col-form-label form-label text-start"
                      >Email</label
                    >

                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        aria-label="Email"
                        value="mark@site.com"
                      />
                    </div>
                  </div>
                  <!-- End Form -->

                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="organizationLabel"
                      class="col-sm-3 col-form-label form-label text-start"
                      >Company</label
                    >

                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        name="organization"
                        id="organizationLabel"
                        placeholder="Your organization"
                        aria-label="Your organization"
                        value="Htmlstream"
                      />
                    </div>
                  </div>
                  <!-- End Form -->

                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="locationLabel"
                      class="col-sm-3 col-form-label form-label text-start"
                      >Location</label
                    >
                  </div>
                  <!-- End Form -->

                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="addressLine1Label"
                      class="col-sm-3 col-form-label form-label text-start"
                      >Address line 1</label
                    >

                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        name="address1"
                        id="address1"
                        placeholder="Your address"
                        aria-label="Your address"
                        value="45 Roker Terrace, Latheronwheel"
                      />
                    </div>
                  </div>
                  <!-- End Form -->

                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="addressLine2Label"
                      class="col-sm-3 col-form-label form-label text-start"
                      >Address line 2
                      <span class="form-label-secondary"
                        >(Optional)</span
                      ></label
                    >

                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        name="addressLine2"
                        id="addressLine2Label"
                        placeholder="Your address"
                        aria-label="Your address"
                      />
                    </div>
                  </div>
                  <!-- End Form -->

                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="zipCodeLabel"
                      class="col-sm-3 col-form-label form-label text-start"
                      >Zip code
                      <i
                        class="bi-question-circle text-body ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="You can find your code in a postal address."
                      ></i
                    ></label>

                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="js-input-mask form-control"
                        name="zipCode"
                        id="zipCodeLabel"
                        placeholder="Your zip code"
                        aria-label="Your zip code"
                      />
                    </div>
                  </div>
                  <!-- End Form -->

                  <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary fw-bold">
                      Save changes
                    </button>
                  </div>
                </form>
                <!-- End Form -->
              </div>
              <!-- End Body -->
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div id="emailSection" class="card">
              <div class="card-header">
                <h4 class="card-title text-start">Email</h4>
              </div>

              <!-- Body -->
              <div class="card-body text-start">
                <p class="text-start">
                  Your current email address is
                  <span class="fw-semi-bold">mark@site.com</span>
                </p>

                <!-- Form -->
                <form>
                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="newEmailLabel"
                      class="col-sm-3 col-form-label form-label"
                      >New email address</label
                    >

                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control"
                        name="newEmail"
                        id="newEmailLabel"
                        placeholder="Enter new email address"
                        aria-label="Enter new email address"
                      />
                    </div>
                  </div>
                  <!-- End Form -->

                  <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary fw-bold">
                      Save changes
                    </button>
                  </div>
                </form>
                <!-- End Form -->
              </div>
              <!-- End Body -->
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div id="passwordSection" class="card">
              <div class="card-header">
                <h4 class="card-title text-start">Change your password</h4>
              </div>

              <!-- Body -->
              <div class="card-body">
                <!-- Form -->
                <form id="changePasswordForm">
                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="currentPasswordLabel"
                      class="col-sm-3 col-form-label form-label text-start"
                      >Current password</label
                    >

                    <div class="col-sm-9">
                      <input
                        type="password"
                        class="form-control"
                        name="currentPassword"
                        id="currentPasswordLabel"
                        placeholder="Enter current password"
                        aria-label="Enter current password"
                      />
                    </div>
                  </div>
                  <!-- End Form -->

                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="newPassword"
                      class="col-sm-3 col-form-label form-label text-start"
                      >New password</label
                    >

                    <div class="col-sm-9">
                      <input
                        type="password"
                        class="form-control"
                        name="newPassword"
                        id="newPassword"
                        placeholder="Enter new password"
                        aria-label="Enter new password"
                      />
                    </div>
                  </div>
                  <!-- End Form -->

                  <!-- Form -->
                  <div class="row mb-4">
                    <label
                      for="confirmNewPasswordLabel"
                      class="col-sm-3 col-form-label form-label text-start"
                      >Confirm new password</label
                    >

                    <div class="col-sm-9">
                      <div class="mb-3">
                        <input
                          type="password"
                          class="form-control"
                          name="confirmNewPassword"
                          id="confirmNewPasswordLabel"
                          placeholder="Confirm your new password"
                          aria-label="Confirm your new password"
                        />
                      </div>

                      <h5 class="text-start">Password requirements:</h5>

                      <p class="fs-6 mb-2 text-start">
                        Ensure that these requirements are met:
                      </p>

                      <ul class="fs-6">
                        <li class="text-start">
                          Minimum 8 characters long - the more, the better
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- End Form -->

                  <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary fw-bold">
                      Save Changes
                    </button>
                  </div>
                </form>
                <!-- End Form -->
              </div>
              <!-- End Body -->
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div id="billingSection" class="card">
              <div class="card-header">
                <h4 class="card-title text-start">Billing</h4>
              </div>

              <!-- Body -->
              <div class="card-body">
                <div class="row">
                  <div class="col-md mb-4 mb-md-0">
                    <div class="mb-4">
                      <span class="card-subtitle text-start"
                        >Your plan (billed yearly):</span
                      >
                      <h3 class="text-start">Next Billing: N/A</h3>
                    </div>

                    <div>
                      <span class="card-subtitle text-start"
                        >Total per year</span
                      >
                      <h1 class="text-primary text-start">$0 USD</h1>
                    </div>
                  </div>
                  <!-- End Col -->

                  <div class="col-md-auto">
                    <div class="d-grid d-sm-flex gap-3">
                      <a class="btn btn-white" href="#">Cancel subscription</a>
                      <button
                        type="button"
                        class="btn btn-primary w-100 w-sm-auto fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#accountUpdatePlanModal"
                      >
                        Update plan
                      </button>
                    </div>
                  </div>
                  <!-- End Col -->
                </div>
                <!-- End Row -->
              </div>
              <!-- End Body -->
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div id="deleteAccountSection" class="card">
              <div class="card-header">
                <h4 class="card-title text-start">Delete your account</h4>
              </div>

              <!-- Body -->
              <div class="card-body">
                <p class="card-text text-start">
                  When you delete your account, you lose access to Front account
                  services, and we permanently delete your personal data. You
                  can cancel the deletion for 14 days.
                </p>

                <div class="mb-4">
                  <!-- Form Check -->
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="deleteAccountCheckbox"
                    />
                    <label
                      class="form-check-label text-primary"
                      for="deleteAccountCheckbox"
                    >
                      Confirm that I want to delete my account.
                    </label>
                  </div>
                  <!-- End Form Check -->
                </div>

                <div class="d-flex justify-content-end gap-3">
                  <button type="submit" class="btn btn-danger fw-bold">
                    Delete
                  </button>
                </div>
              </div>
              <!-- End Body -->
            </div>
            <!-- End Card -->
          </div>

          <!-- Sticky Block End Point -->
          <div id="stickyBlockEndPoint"></div>
        </div>
      </div>
      <!-- End Row -->
    </div>
    <!-- End Content -->
  </main>
</template>

<script>
export default {
  name: "AccountSettings",
  data() {
    return {
      selectedUser: null,
    };
  },
  computed: {
    firstName() {
      return this.selectedUser.firstName;
    },
    lastName() {
      return this.selectedUser.lastName;
    },
    email() {
      return this.selectedUser.email;
    },
    company() {
      return this.selectedUser.company;
    },
    address1() {
      return this.selectedUser.address1;
    },
    address2() {
      return this.selectedUser.address2;
    },
    billingZip() {
      return this.selectedUser.address1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
