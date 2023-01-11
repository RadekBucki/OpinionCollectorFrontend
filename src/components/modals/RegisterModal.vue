<template>
  <div class="modal fade" ref="staticBackdropForRegister" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Register</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="registerUser">
            <div class="text-start form-group mb-3">
              <label>Email</label>
              <input v-model="this.credentials.email" type="email" class="form-control" placeholder="Enter email" required>
              <small v-if="this.errors.accountError" class="text-start" style="color: red;">{{ this.errors.errorMessage }}</small>
            </div>
            <div class="text-start form-group mb-3">
              <label>First name</label>
              <input v-model="this.credentials.firstName" type="text" class="form-control" placeholder="Enter first name" required>
            </div>
            <div class="text-start form-group mb-3">
              <label>Last name</label>
              <input v-model="this.credentials.lastName" type="text" class="form-control" placeholder="Enter last name" required>
            </div>
            <div class="text-start form-group mb-3">
              <label>Password</label>
              <input v-model="this.credentials.password" type="password" class="form-control" placeholder="Enter password" required>
              <small v-if="this.errors.passwordError" class="text-start" style="color: red;">Passwords don't match!</small>
            </div>
            <div class="text-start form-group mb-3">
              <label>Confirm password</label>
              <input v-model="this.credentials.confirmPassword" type="password" class="form-control" placeholder="Enter password again" required>
            </div>
            <button type="submit" class="btn btn-primary m-auto w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" ref="staticBackdropForMessage" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Success!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>You have successfully registered your account!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from "bootstrap";
import {PostRequest} from "@/communication/Network.ts";

export default {
  emits: ['get-modal'],
  data() {
    return {
      modal: null,
      messageModal: null,
      credentials: {
        email: null,
        password: null,
        confirmPassword: null,
        firstName: null,
        lastName: null,
        imageUrl: null,
      },
      errors: {
        errorMessage: null,
        accountError: false,
        passwordError: false,
      }
    };
  },
  methods: {
    async registerUser() {
      if(this.credentials.password !== this.credentials.confirmPassword) {
        this.errors.passwordError = true;
        return;
      } else {
        this.errors.passwordError = false;
      }

      const registerUser = {
        email: this.credentials.email,
        firstName: this.credentials.firstName,
        lastName: this.credentials.lastName,
        password: this.credentials.password,
        pictureUrl: "https://www.url-to-picture.com",
        isAdmin: false,
        id: null
      };

      PostRequest.userRegister(registerUser).then(() => {
        this.errors.accountError = false
        this.modal.hide()
        this.messageModal.show()
      }).catch((err) => {
        if (err.response.status === 406) {
          this.errors.errorMessage = `This email is already taken!`
        } else {
          this.errors.errorMessage = `Sorry! We couldn't register your account!`
        }
        this.errors.accountError = true
      })
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.staticBackdropForRegister)
    this.messageModal = new Modal(this.$refs.staticBackdropForMessage)
    this.$emit('get-modal', this.modal)
  }
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
