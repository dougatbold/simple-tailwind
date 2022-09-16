<template>
  <main id="content" role="main" class="main">
    <div
      class="position-fixed top-0 end-0 start-0 bg-img-start"
      style="height: 32rem"
    >
      <!-- Shape -->
      <div class="shape shape-bottom zi-1">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
        >
          <polygon fill="#fff" points="0,273 1921,273 1921,0 " />
        </svg>
      </div>
      <!-- End Shape -->
    </div>

    <!-- Content -->
    <div class="container py-5 py-sm-7">
      <!-- <a class="d-flex justify-content-center mb-5" href="./index.html">
        <img
          class="zi-2"
          src="./assets/svg/logos/logo.svg"
          alt="Image Description"
          style="width: 8rem"
        />
      </a> -->

      <div class="mx-auto" style="max-width: 30rem">
        <!-- Card -->
        <div class="card card-lg mb-5">
          <div class="card-body">
            <!-- Form -->
            <form class="js-validate needs-validation" novalidate>
              <div class="mb-5">
                <h1 class="display-5">Create your account</h1>
                <p>
                  Already have an account?
                  <router-link to="/login">Sign in here</router-link>
                </p>
              </div>

              <label class="form-label text-start" for="fullNameSrEmail"
                >Full name</label
              >

              <!-- Form -->
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-sm-6">
                    <!-- Form -->
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        name="fullName"
                        id="fullNameSrEmail"
                        placeholder="Mark"
                        aria-label="Mark"
                        v-model="firstName"
                      />
                      <span class="invalid-feedback"
                        >Please enter your first name.</span
                      >
                    </div>
                    <!-- End Form -->
                  </div>

                  <div class="col-sm-6">
                    <!-- Form -->
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Williams"
                        aria-label="Williams"
                        v-model="lastName"
                      />
                      <span class="invalid-feedback"
                        >Please enter your last name.</span
                      >
                    </div>
                    <!-- End Form -->
                  </div>
                </div>
                <!-- End Form -->

                <!-- Form -->
                <div class="mb-4">
                  <label
                    class="form-label justify-label-start"
                    for="signupSrEmail"
                    >Your email</label
                  >
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    name="email"
                    id="signupSrEmail"
                    placeholder="Markwilliams@site.com"
                    aria-label="Markwilliams@site.com"
                    v-model="email"
                  />
                  <span class="invalid-feedback"
                    >Please enter a valid email address.</span
                  >
                </div>
                <!-- End Form -->

                <!-- Form -->
                <div class="mb-4">
                  <label class="form-label" for="signupSrPassword"
                    >Password</label
                  >

                  <div
                    class="input-group input-group-merge"
                    data-hs-validation-validate-class
                  >
                    <input
                      type="password"
                      class="js-toggle-password form-control form-control-lg"
                      name="password"
                      id="signupSrPassword"
                      placeholder="8+ characters required"
                      aria-label="8+ characters required"
                      v-model="password"
                      minlength="8"
                      data-hs-toggle-password-options='{
                               "target": [".js-toggle-password-target-1", ".js-toggle-password-target-2"],
                               "defaultClass": "bi-eye-slash",
                               "showClass": "bi-eye",
                               "classChangeTarget": ".js-toggle-password-show-icon-1"
                             }'
                    />
                    <a
                      class="js-toggle-password-target-1 input-group-append input-group-text"
                      href="javascript:;"
                    >
                      <i class="js-toggle-password-show-icon-1 bi-eye"></i>
                    </a>
                  </div>

                  <span class="invalid-feedback"
                    >Your password is invalid. Please try again.</span
                  >
                </div>
                <!-- End Form -->

                <!-- Form -->
                <div class="mb-4">
                  <label class="form-label" for="signupSrConfirmPassword"
                    >Confirm password</label
                  >

                  <div
                    class="input-group input-group-merge"
                    data-hs-validation-validate-class
                  >
                    <input
                      type="password"
                      class="js-toggle-password form-control form-control-lg"
                      name="confirmPassword"
                      id="signupSrConfirmPassword"
                      placeholder="8+ characters required"
                      aria-label="8+ characters required"
                      v-model="passwordConfirm"
                      minlength="8"
                      data-hs-toggle-password-options='{
                               "target": [".js-toggle-password-target-1", ".js-toggle-password-target-2"],
                               "defaultClass": "bi-eye-slash",
                               "showClass": "bi-eye",
                               "classChangeTarget": ".js-toggle-password-show-icon-2"
                             }'
                    />
                    <a
                      class="js-toggle-password-target-2 input-group-append input-group-text"
                      href="javascript:;"
                    >
                      <i class="js-toggle-password-show-icon-2 bi-eye"></i>
                    </a>
                  </div>

                  <span class="invalid-feedback"
                    >Password does not match the confirm password.</span
                  >
                </div>
              </form>
              <!-- End Form -->

              <!-- Form Check -->
              <div class="form-check mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="termsCheckbox"
                  required
                />
                <label class="form-check-label" for="termsCheckbox">
                  I accept the <a href="#">Terms and Conditions</a>
                </label>
                <span class="invalid-feedback"
                  >Please accept our Terms and Conditions.</span
                >
              </div>
              <!-- End Form Check -->

              <div class="d-grid gap-2">
                <button
                  v-on:click="
                    {
                      {
                        submitForm();
                      }
                    }
                  "
                  type="submit"
                  class="btn btn-primary btn-lg"
                >
                  Create an account
                </button>
              </div>
            </form>
            <!-- End Form -->
          </div>
        </div>
        <!-- End Card -->

        <!-- Footer -->
        <div class="position-relative text-center zi-1">
          <small class="text-cap text-body mb-4"
            >Trusted by the world's best teams</small
          >
        </div>
        <!-- End Footer -->
      </div>
    </div>
    <!-- End Content -->
  </main>
</template>

<script>
export default {
  name: "UserSignup",
  data() {
    return {
      firstName: " ",
      lastName: " ",
      email: " ",
      password: " ",
      passwordConfirm: " ",
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    isUser() {
      return this.$store.getters["users/isUser"];
    },
  },
  methods: {
    validateForm() {},
    submitForm() {
      this.validateForm();
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
      };
      this.$store.dispatch("users/registerUser", formData);
      this.$router.replace("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
