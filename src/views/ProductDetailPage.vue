<template>
  <div class="container mt-5">
      <div class="row mb-3">
        <div class="col-md-3 col-12 mb-3">
          <img :src="this.product?.pictureUrl" class="rounded img-fluid" style="object-fit: cover; flex-shrink: 0; min-width: 100%; min-height: 100%;" alt="productImage" />
        </div>
        <div class="text-start col-md-9 col-12">
          <p class="fw-semibold fs-5">{{ this.product?.name }} ({{ this.product?.sku }})</p>
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
        <p class="text-start fw-semibold fs-5">Opinions</p>
        <div class="mb-5 mt-1" v-for="opinion in this.opinions" :key="opinion">

        <star-rating
            read-only
            :show-rating="true"
            v-bind:star-size="25"
            class="col-6 d-flex align-items-start"
            v-model:rating="opinion.opinionValue" />

          <div class="mt-3">
            <div class="d-flex align-items-center" v-for="adv in opinion.advantages" :key="adv">
              <b class="text-start fw-semibold fs-5" style="color:green;"> + </b>
              <div class="text-start ms-1" style="color:green;">{{ adv }}</div>
            </div>
          </div>

          <div class="mt-3">
            <div class="d-flex align-items-center" v-for="adv in opinion.advantages" :key="adv">
              <b class="text-start fw-semibold fs-5" style="color:red;"> - </b>
              <div class="text-start ms-1" style="color:red;">{{ adv }}</div>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
import {GetRequest} from "@/communication/Network.ts";
import StarRating from "vue-star-rating";

export default {
  name: "ProductDetailPage",
  components: {
    StarRating
  },
  props: {
    sku: null
  },
  data: () => ({
    product: null,
    opinions: null
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

<style scoped>

</style>