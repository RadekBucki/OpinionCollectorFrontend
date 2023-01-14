<template>
  <div class="container mt-5">
      <div class="row mb-3">
        <div class="col-md-3 col-12 mb-3">
          <img :src="this.product?.pictureUrl" class="rounded img-fluid" style="object-fit: cover; flex-shrink: 0; min-width: 100%; min-height: 100%;" alt="productImage" />
        </div>
        <div class="text-start col-md-9 col-12">
          <div class="d-flex align-items-center">
            <b class=" fs-5">{{ this.product?.name }} ({{ this.product?.sku }})</b>
            <button v-if="this.isLoggedIn" @click="this.suggestionModal.show()" type="button" class="btn btn-outline-dark ms-3">Add suggestion</button>
          </div>
          <p class="fw-lighter">{{ getProductCategoriesForDisplay() }}</p>
          <star-rating
              read-only
              :show-rating="true"
              v-bind:star-size="25"
              v-if="this.product"
              class="col-6 d-flex align-items-start"
              v-model:rating="this.product.opinionAvg" />
        </div>
      </div>
      <div class="row">
        <hr>
        <p class="text-start fw-semibold fs-5">Product description</p>
        <p class="text-start">{{ this.product?.description }}</p>
      </div>
      <div class="row">
        <hr>
        <div class="d-flex align-items-center">
          <b class="text-start fs-5">Opinions</b>
          <button v-if="this.isLoggedIn" @click="this.opinionModal.show()" type="button" class="btn btn-outline-dark ms-3">Add opinion</button>
        </div>
        <div class="mb-5 mt-4" v-for="opinion in this.opinions" :key="opinion">

          <div class="d-flex align-items-center">
            <b class="mt-1">Anonymous</b>
            <star-rating
                read-only
                :show-rating="true"
                v-bind:star-size="25"
                class="d-flex align-items-start ms-2"
                v-model:rating="opinion.opinionValue" />
          </div>

          <div class="mt-3">
            <p class="text-start fs-6"> {{ opinion.description }} </p>
          </div>

          <div v-if="opinion.advantages" class="mt-3">
            <b class="d-flex text-start fs-6" style="color:green;"> Advantages </b>
            <div class="d-flex align-items-center" v-for="adv in opinion.advantages" :key="adv">
              <b class="d-flex text-start fs-5" style="color:green;"> + </b>
              <div class="text-start ms-1" style="color:green;">{{ adv }}</div>
            </div>
          </div>
          <div v-if="!opinion.advantages" class="mt-3 text-start">
            <b class="text-start fs-6" style="color:green;"> No advantages. </b>
          </div>

          <div v-if="opinion.disadvantages" class="mt-3">
            <b class="d-flex text-start fs-6" style="color:red;"> Disadvantages </b>
            <div class="d-flex align-items-center" v-for="disadvantage in opinion.disadvantages" :key="disadvantage">
              <b class="text-start fs-5" style="color:red;"> - </b>
              <div class="text-start ms-1" style="color:red;">{{ disadvantage }}</div>
            </div>
          </div>
          <div v-if="!opinion.disadvantages" class="mt-3 text-start">
            <b class="text-start fs-6" style="color:red;"> No disadvantages. </b>
          </div>

          <div v-if="opinion.pictureUrl" class="mt-3 d-flex">
            <img :src="opinion.pictureUrl" class="rounded img-fluid" style="object-fit: cover; flex-shrink: 0; width: 150px; height: 150px;" alt="opinionProductImage" />
          </div>

        </div>
      </div>
  </div>

  <opinion-modal :sku="this.product?.sku" @get-modal="(modal) => { this.opinionModal = modal }"/>
  <SuggestionModal :sku="this.product?.sku" @get-modal="(modal) => { this.suggestionModal = modal }"/>
</template>

<script>
import {GetRequest, MethodRequest} from "@/communication/Network.ts";
import StarRating from "vue-star-rating";
import OpinionModal from "@/components/modals/OpinionModal";
import SuggestionModal from "@/components/modals/SuggestionModal";

export default {
  name: "ProductDetailPage",
  components: {
    StarRating,
    OpinionModal,
    SuggestionModal
  },
  props: {
    sku: null
  },
  data: () => ({
    isLoggedIn: MethodRequest.isTokenAvailable(),
    product: null,
    opinions: null,
    opinionModal: null,
    suggestionModal: null
  }),
  methods: {
    getProductCategoriesForDisplay() {
      return this.product?.categories.map((cat) => { return cat.categoryName }).join(', ')
    }
  },
  mounted() {
    Promise.all([GetRequest.getProductDetails(this.sku), GetRequest.getProductOpinions(this.sku)]).then((res) => {
      this.product = res[0]
      this.opinions = res[1]
    })
  }
}
</script>