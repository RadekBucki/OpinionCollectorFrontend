<template>
  <section class="">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">
          <div class="px-5 mt-4 ms-xl-4">
            <span class="h1 fw-bold mb-0">Sign in</span>
          </div>

          <div class="d-flex justify-content-center align-items-center h-custom-2 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <form style="width: 23rem">
              <div class="form-outline mb-2">
                <label class="form-label" for="form2Example18">Email address</label>
                <input type="email" id="form2Example18" class="form-control form-control-lg" />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example28">Password</label>
                <input type="password" id="form2Example28" class="form-control form-control-lg" />
              </div>

              <div class="pt-1 mb-4">
                <button class="btn btn-dark text-light btn-lg col-12" type="button">Login</button>
              </div>

              <p>Don't have an account? <a href="/register" class="link-primary">Register here</a></p>

              <div class="divider d-flex justify-content-center align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a class="btn col-10 text-light mb-2" style="background-color: #3b5998" href="#!" role="button">
                Continue with Facebook
              </a>
              <a class="btn text-light col-10" style="background-color: #4285f4" href="#!" role="button">
                Sign in with Google</a
              >
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
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      login: null,
      password: null,
    };
  },
  methods: {
    async loginUser(e) {
      e.preventDefault();
      const body = {
        login: this.login,
        password: this.password,
      };
      await axios
        .post("http://localhost:3000/login", body)
        .then((res) => {
          console.log(res);
          this.$router.replace("/");
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", this.login);
          console.log("Login successful");
          // this.$swal({
          //   title: "Good job!",
          //   text: "Sucessfully logged in!",
          //   icon: "success",
          // });
        })
        .catch((err) => {
          console.log("err", err.response.data);
          //   this.$swal({
          //     title: "Error",
          //     text: err.response.data.message,
          //     icon: "error",
          //   });
        });
    },
  },
  created() {
    // document.body.style.backgroundColor = "#e9f1f7";
  },
  mounted() {},
};
</script>

<style scoped>
img {
  width: 100%;
  overflow: hidden;

  transform: translate(0%, 20%);
}

/* button {
  background: #48acf0;
} */
/* #loginUser {
  border: 2px solid #48acf0;
} */
</style>
