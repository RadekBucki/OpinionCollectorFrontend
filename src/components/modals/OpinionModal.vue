<template>
  <div class="modal fade" ref="staticBackdropForOpinion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Add your opinion</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addOpinion">
            <div class="form-group text-start mb-3">
              <label>Description</label>
              <textarea v-model="this.opinion.description" class="form-control" rows="3" placeholder="Tell us about this product." required/>
            </div>
            <div class="form-group text-start mb-3">
              <label>Product picture URL (Optional)</label>
              <input v-model="this.opinion.pictureURL" type="url" class="form-control" placeholder="Enter product picture URL"/>
            </div>

            <div class="form-group text-start mb-3">
              <label>Advantages</label>
              <button type="button" @click="this.addAdvantage()" class="ms-2 btn btn-outline-dark">+</button>
              <div class="row mt-2 mb-2" v-for="adv in this.opinion.advantages" :key="adv">
                <div class="col-10">
                  <input  v-model="adv.advantageDescription" type="text" class="form-control" placeholder="Enter advantage" required>
                </div>
                <div class="col-2">
                  <button type="button" @click="this.removeAdvantage(adv.id)" class="form-control btn btn-outline-danger">-</button>
                </div>
              </div>
            </div>

            <div class="form-group text-start mb-3">
              <label>Disadvantages</label>
              <button type="button" @click="this.addDisadvantage()" class="ms-2 btn btn-outline-dark">+</button>
              <div class="row mt-2 mb-2" v-for="adv in this.opinion.disadvantages" :key="adv">
                <div class="col-10">
                  <input  v-model="adv.disadvantageDescription" type="text" class="form-control" placeholder="Enter disadvantage" required>
                </div>
                <div class="col-2">
                  <button type="button" @click="this.removeDisadvantage(adv.id)" class="form-control btn btn-outline-danger">-</button>
                </div>
              </div>
            </div>

            <div class="form-group text-start mb-3">
              <label>Grade</label>
              <star-rating
                  :show-rating="true"
                  v-bind:star-size="25"
                  class="mt-2 mb-3"
                  v-model:rating="this.opinion.grade" />
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
          <button @click="reloadWindow" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
import StarRating from "vue-star-rating";
import {MethodRequest, PostRequest} from "@/communication/Network.ts";

export default {
  name: "OpinionModal",
  emits: ['get-modal'],
  components: {
    StarRating
  },
  props: {
    sku: String
  },
  data: () => ({
    modal: null,
    messageModal: null,
    opinion: {
      description: null,
      pictureURL: null,
      advantages: [],
      disadvantages: [],
      grade: null
    }
  }),
  methods: {
    addOpinion() {
      const opinion = {
        advantages: this.opinion.advantages.map((adv) => { return adv.advantageDescription }),
        description: this.opinion.description,
        disadvantages: this.opinion.disadvantages.map((adv) => { return adv.disadvantageDescription }),
        firstName: MethodRequest.getUser().firstName,
        opinionValue: this.opinion.grade,
        opinionAvg: null,
        pictureUrl: this.opinion.pictureURL,
        sku: this.sku
      }

      PostRequest.addOpinion(opinion).then(() => {
          this.clearOpinionObject()
          this.modal.hide();
          this.messageModal.show();
      })
    },
    addAdvantage() {
      this.opinion.advantages.push({id: this.guidGenerator(), advantageDescription: null});
    },
    removeAdvantage(ID) {
      this.opinion.advantages = this.opinion.advantages.filter((adv) => { return adv.id !== ID });
    },
    addDisadvantage() {
      this.opinion.disadvantages.push({id: this.guidGenerator(), disadvantageDescription: null});
    },
    removeDisadvantage(ID) {
      this.opinion.disadvantages = this.opinion.disadvantages.filter((adv) => { return adv.id !== ID });
    },
    guidGenerator() {
      const S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    },
    clearOpinionObject() {
      this.opinion.firstName = null;
      this.opinion.description = null;
      this.opinion.grade = null;
      this.opinion.pictureURL = null;
      this.opinion.advantages = [];
      this.opinion.disadvantages = [];
    },
    reloadWindow() {
      window.location.reload();
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.staticBackdropForOpinion);
    this.messageModal = new Modal(this.$refs.staticBackdropForMessage);
    this.$emit('get-modal', this.modal);
  }
}
</script>

<style scoped>

</style>