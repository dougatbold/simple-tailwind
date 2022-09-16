<template>
  <main id="content" role="main" class="main">
    <div
      class="position-fixed top-0 end-0 start-0 bg-img-start"
      style="
        height: 32rem;
        background-image: url(./assets/svg/components/card-6.svg);
      "
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
            <form
              @submit.prevent="submitForm"
              class="js-validate needs-validation"
              novalidate
            >
              <div class="mb-5">
                <h1 class="display-5">Sign in</h1>
                <p>
                  Don't have an account?
                  <router-link to="/sign-up">Sign up here</router-link>
                </p>
              </div>
              <!-- Form -->
              <div class="row">
                <div class="col-sm-6"></div>
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
                  v-model="email"
                  type="email"
                  class="form-control form-control-lg"
                  name="email"
                  id="signupSrEmail"
                  placeholder="e.g. danielle@boldxchange.com"
                  aria-label="danielle@boldxchange.com"
                  required
                />
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
                    v-model="password"
                    type="password"
                    class="js-toggle-password form-control form-control-lg"
                    name="password"
                    id="signupSrPassword"
                    placeholder="8+ characters required"
                    aria-label="8+ characters required"
                    required
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

                <span v-if="!formIsValid" class="invalid-feedback"
                  >Your email or password is invalid. Please try again.</span
                >
              </div>
              <!-- End Form -->

              <div class="d-grid gap-2">
                <button
                  @click="login"
                  type="submit"
                  class="btn btn-primary btn-lg"
                >
                  Sign in
                </button>
              </div>
            </form>
            <!-- End Form -->
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
    <!-- End Content -->
  </main>
</template>

<script>
export default {
  name: "UserLogin",
  methods: {
    login() {
      this.$store.dispatch("login");
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      formIsValid: true,
    };
  },
  //   methods: submitForm() {

  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
