<template>
  <MobilePanelNavigation />
  <div class="row mx-0">
    <PanelNavigation />
    <div class="col-9 opinions mt-3">
      <h1>User Opinions</h1>
      <div v-for="opinion in userOpinions" :key="opinion">
        <div class="mt-5 mx-auto border rounded item row text-start">
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
              <div>
                Advantages:
                <ul v-for="advantage in opinion.advantages" :key="advantage">
                  <li>{{ advantage }}</li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div>
                Disadvantages:
                <ul v-for="disadvantage in opinion.disadvantages" :key="disadvantage">
                  <li>{{ disadvantage }}</li>
                </ul>
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
          console.log(err.response);
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
