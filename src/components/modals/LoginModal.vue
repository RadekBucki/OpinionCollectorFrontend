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
            <div class="form-group mb-3">
              <label >Email</label>
              <input v-model="this.email" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" required>
            </div>
            <div class="form-group mb-3">
              <label >Password</label>
              <input v-model="this.password" type="password" class="form-control" placeholder="Enter password" required>
            </div>
            <button type="submit" class="btn btn-primary m-auto w-100">Log in</button>
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
    };
  },
  methods: {
    async loginUser(e) {
      e.preventDefault();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.staticBackdropForLogin)
    this.errorModal = new Modal(this.$refs.staticBackdropForError)
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
