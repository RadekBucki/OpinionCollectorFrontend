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
            <div class="form-group mb-3">
              <label for="exampleInputEmail1">Email</label>
              <input v-model="this.email" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" required>
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">First name</label>
              <input v-model="this.firstName" type="password" class="form-control" placeholder="Enter first name" required>
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Last name</label>
              <input v-model="this.lastName" type="password" class="form-control" placeholder="Enter last name" required>
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Password</label>
              <input v-model="this.password" type="password" class="form-control" placeholder="Enter password" required>
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Confirm password</label>
              <input v-model="this.confirmPassword" type="password" class="form-control" placeholder="Enter password again" required>
            </div>
            <button type="submit" class="btn btn-primary m-auto w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" ref="staticBackdropForError" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Error!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h3>Error occurred</h3>
          <p>Error message</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from "bootstrap";

export default {
  emits: ['get-modal'],
  data() {
    return {
      modal: null,
      errorModal: null,
      email: null,
      password: null,
      confirmPassword: null,
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
  mounted() {
    this.modal = new Modal(this.$refs.staticBackdropForRegister)
    this.errorModal = new Modal(this.$refs.staticBackdropForError)
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
