<template>
  <div class="modal fade" ref="staticBackdropForOpinion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Add your opinion</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="">
            <div class="form-group text-start mb-3">
              <label>First name</label>
<!--              <input v-model="" type="" class="form-control" placeholder="" required>-->
<!--              <small v-if="loginError" class="text-start" style="color: red;">Incorrect login or password!</small>-->
            </div>
            <div class="form-group text-start mb-3">
              <label>Description</label>
              <!--              <input v-model="" type="" class="form-control" placeholder="" required>-->
              <!--              <small v-if="loginError" class="text-start" style="color: red;">Incorrect login or password!</small>-->
            </div>
            <div class="form-group text-start mb-3">
              <label>Advantages</label>
              <!--              <input v-model="" type="" class="form-control" placeholder="" required>-->
              <!--              <small v-if="loginError" class="text-start" style="color: red;">Incorrect login or password!</small>-->
            </div>
            <div class="form-group text-start mb-3">
              <label>Disadvantages</label>
              <!--              <input v-model="" type="" class="form-control" placeholder="" required>-->
              <!--              <small v-if="loginError" class="text-start" style="color: red;">Incorrect login or password!</small>-->
            </div>
            <div class="form-group text-start mb-3">
              <label>Grade</label>
              <!--              <input v-model="" type="" class="form-control" placeholder="" required>-->
              <!--              <small v-if="loginError" class="text-start" style="color: red;">Incorrect login or password!</small>-->
            </div>
            <button type="submit" class="btn btn-primary m-auto w-100">Add opinion</button>
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
          <p>You have successfully added your opinion!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from "bootstrap";

export default {
  name: "OpinionModal",
  emits: ['get-modal'],
  props: {
    sku: String
  },
  data: () => ({
    modal: null,
    messageModal: null
  }),
  methods: {

  },
  mounted() {
    this.modal = new Modal(this.$refs.staticBackdropForOpinion)
    this.messageModal = new Modal(this.$refs.staticBackdropForMessage)
    this.$emit('get-modal', this.modal)
  }
}
</script>

<style scoped>

</style>