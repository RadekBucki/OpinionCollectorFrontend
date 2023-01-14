<template>
  <MobilePanelNavigation />
  <div class="row mx-0">
    <PanelNavigation />
    <div class="col-9 opinions mt-3">
      <h1>User Opinions</h1>
      <div v-for="opinion in userOpinions" :key="opinion">
        <div class="mt-5 mx-auto border rounded item row text-start">
          <div class="fw-semibold fs-5 mx-2 mt-1">{{ opinion.productName }}</div>
          <div class="row px-3 box d-flex justify-content-center align-items-center">
            <div class="col-3 image d-flex justify-content-center align-items-center">
              <img :src="opinion.pictureUrl" class="img-fluid" alt="productImage" />
            </div>
            <div class="col-3">
              <star-rating
                read-only
                :show-rating="false"
                v-bind:star-size="25"
                v-if="opinion.opinionValue"
                class="col-5 d-flex align-items-start"
                v-model:rating="opinion.opinionValue"
              />
              <p v-if="!opinion.opinionValue" class="col-5">{{ "No opinions" }}</p>
            </div>
            <div class="col-3">
              <div v-if="opinion.advantages" class="mt-3">
                <b class="text-start fs-6" style="color: green"> Advantages </b>
                <div class="d-flex align-items-center" v-for="adv in opinion.advantages" :key="adv">
                  <b class="d-flex text-start fs-5" style="color: green"> + </b>
                  <div class="text-start ms-1" style="color: green">{{ adv }}</div>
                </div>
              </div>
              <div v-if="!opinion.advantages" class="mt-3 text-start">
                <b class="text-start fs-6" style="color: green"> No advantages. </b>
              </div>
            </div>

            <div class="col-3">
              <div v-if="opinion.disadvantages" class="mt-3">
                <b class="d-flex text-start fs-6" style="color: red"> Disadvantages </b>
                <div
                  class="d-flex align-items-center"
                  v-for="disadvantage in opinion.disadvantages"
                  :key="disadvantage"
                >
                  <b class="text-start fs-5" style="color: red"> - </b>
                  <div class="text-start ms-1" style="color: red">{{ disadvantage }}</div>
                </div>
              </div>
              <div v-if="!opinion.disadvantages" class="mt-3 text-start">
                <b class="text-start fs-6" style="color: red"> No disadvantages. </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PanelNavigation from "@/components/PanelNavigation.vue";
import MobilePanelNavigation from "@/components/MobilePanelNavigation.vue";
import { GetRequest } from "@/communication/Network.ts";
import { MethodRequest } from "@/communication/Network.ts";
import StarRating from "vue-star-rating";

export default {
  name: "OpinionsPage",
  components: {
    MobilePanelNavigation,
    PanelNavigation,
    StarRating,
  },
  data() {
    return {
      userOpinions: [],
    };
  },
  methods: {
    fetchUserOpinions() {
      GetRequest.getUserOpinions()
        .then((result) => {
          this.userOpinions = result;
        })
        .catch((err) => {
          if (err.response.status === 401) {
            MethodRequest.userLogout();
            window.location.reload();
          }
        });
    },
  },
  mounted() {
    this.fetchUserOpinions();
  },
};
</script>

<style scoped>
.item img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

@media (max-width: 1200px) {
  .opinions {
    width: 100% !important;
  }
}

@media (max-width: 550px) {
  .box {
    flex-direction: column;
  }
}
</style>
