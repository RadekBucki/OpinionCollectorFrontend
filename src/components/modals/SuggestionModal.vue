<template>
  <div class="modal fade" ref="staticBackdropForSuggestion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Add your suggestion</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="sendSuggestion">
            <div class="form-group text-start mb-3">
              <label>Description</label>
              <textarea v-model="this.suggestionDescription" class="form-control" rows="5" placeholder="What would you change in description of this product?" required/>
            </div>
            <button type="submit" class="btn btn-primary m-auto w-100">Add suggestion</button>
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
          <p>You have successfully submitted a review suggestion!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from "bootstrap";
import {PostRequest} from "@/communication/Network.ts";
import {SweetAlert} from "@/communication/SweetAlerts.ts";

export default {
  name: "SuggestionModal",
  emits: ['get-modal'],
  props: {
    sku: String
  },
  data: () => ({
    modal: null,
    messageModal: null,
    suggestionDescription: null
  }),
  methods: {
    sendSuggestion() {
      PostRequest.addSuggestion(this.suggestionDescription, this.sku).then(() => {
        this.suggestionDescription = null;
        this.modal.hide();
        this.messageModal.show();
      }).catch((err) => {
        SweetAlert.error(this.$swal, err.response.data.message).then(() => {
          this.suggestionDescription = null;
          this.modal.hide();
        }).bind(this);
      })
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.staticBackdropForSuggestion);
    this.messageModal = new Modal(this.$refs.staticBackdropForMessage);
    this.$emit('get-modal', this.modal);
  }
}
</script>

<style scoped>

</style>