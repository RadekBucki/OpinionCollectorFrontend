<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">
        <div class="px-5 mt-4 ms-xl-4">
          <h1 class="h1 fw-bold mb-0">Sign in</h1>
        </div>

        <div class="d-flex justify-content-center align-items-center h-custom-2 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <form @submit="loginUser" style="width: 23rem">
            <div class="form-outline mb-2">
              <label class="form-label" for="emailForm">Email address</label>
              <input type="email" v-model="email" id="emailForm" class="form-control form-control-lg" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="passwordForm">Password</label>
              <input type="password" v-model="password" id="passwordForm" class="form-control form-control-lg" />
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-dark text-light btn-lg col-12" type="button">Login</button>
            </div>

            <p>
              Don't have an account?
              <a href="#" @click="$emit('change-modal', true)">Register here</a>
            </p>
          </form>
        </div>
      </div>
      <div class="col-sm-5 px-0 d-none d-sm-block d-flex align-items-center justify-content-center">
        <img
          src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Login image"
          class="img-fluid"
          style="object-fit: cover; object-position: center"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['change-modal'],
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async loginUser(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  overflow: hidden;

  transform: translate(0%, 20%);
}
</style>
