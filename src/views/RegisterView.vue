<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 px-0 d-none d-sm-block d-flex align-items-center justify-content-center">
        <img
          src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Login image"
          class="img-fluid"
          style="object-fit: cover; object-position: center"
        />
      </div>
      <div class="col-sm-6 text-black">
        <div class="px-5 mt-4 ms-xl-4">
          <h1 class="h1 fw-bold mb-0">Register</h1>
        </div>

        <div
          class="col-12 d-flex justify-content-center align-items-center h-custom-2 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
        >
          <form @submit="registerUser" style="width: 23rem">
            <div class="row">
              <div class="col-6 form-outline mb-2">
                <label class="form-label">First name</label>
                <input type="text" v-model="firstName" id="firstNameForm" class="form-control form-control-lg" />
              </div>
              <div class="col-6 form-outline mb-2">
                <label class="form-label">Last name</label>
                <input type="text" v-model="lastName" id="lastNameForm" class="form-control form-control-lg" />
              </div>
            </div>
            <div class="form-outline mb-2">
              <label class="form-label">Image url</label>
              <input type="text" v-model="imageUrl" id="imageForm" class="form-control form-control-lg" />
            </div>

            <div class="form-outline mb-2">
              <label class="form-label">Email address</label>
              <input type="email" v-model="email" id="emailForm" class="form-control form-control-lg" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label">Password</label>
              <input type="password" v-model="password" id="passwordForm" class="form-control form-control-lg" />
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-dark text-light btn-lg col-12" type="button">Register</button>
            </div>

            <p>Have an account? <RouterLink class="link-primary" :to="{ name: 'Login' }">Sign in here</RouterLink></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      firstName: null,
      lastName: null,
      imageUrl: null,
    };
  },
  methods: {
    async registerUser(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  overflow: hidden;
  max-width: 611px;
  transform: translate(0%, 20%);
}
</style>
