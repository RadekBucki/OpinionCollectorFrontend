<template>
  <div class="modal fade" ref="staticBackdropForLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Log in</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="loginUser">
            <div class="form-group text-start mb-3">
              <label>Email</label>
              <input v-model="this.credentials.email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" required>
              <small v-if="loginError" class="text-start" style="color: red;">Incorrect login or password!</small>
            </div>
            <div class="form-group text-start mb-3">
              <label>Password</label>
              <input v-model="this.credentials.password" type="password" class="form-control" placeholder="Enter password" required>
            </div>
            <button type="submit" class="btn btn-primary m-auto w-100">Log in</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" ref="staticBackdropForMessage" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Success!</h1>
          <button @click="reloadWindow" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>You have successfully logged in!</p>
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
      loginError: false,
      credentials: {
        email: null,
        password: null,
      }
    };
  },
  methods: {
    async loginUser() {
      PostRequest.userLogin(this.credentials.email, this.credentials.password).then(() => {
        this.loginError = false;
        this.modal.hide();
        this.messageModal.show();
      }).catch(() => {
        this.loginError = true;
      })
    },
    reloadWindow() {
      window.location.reload();
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.staticBackdropForLogin)
    this.messageModal = new Modal(this.$refs.staticBackdropForMessage)
    this.$emit('get-modal', this.modal)
  }
};
</script>

<style scoped>
img {
  width: 100%;
  overflow: hidden;

  transform: translate(0%, 20%);
}
</style>
