<template>
  <MobilePanelNavigation />
  <div class="row mx-0">
    <PanelNavigation />

    <div class="col-9 suggestions mt-3">
      <h1>User Suggestions</h1>
      <div v-for="suggestion in userSuggestions" :key="suggestion">
        <div class="mt-5 mx-auto border rounded item row text-start">
          <div class="fw-semibold fs-5 mx-2 mt-1">{{ suggestion.product.name }}</div>
          <div class="row px-3 box d-flex justify-content-center">
            <div class="col-3 image d-flex justify-content-center">
              <img :src="suggestion.product.pictureUrl" class="img-fluid" alt="productImage" />
            </div>
            <div class="col-4">
              <h1 class="fs-6 fw-bold">Suggestion description:</h1>
              <div>
                {{ suggestion.description }}
              </div>
            </div>
            <div class="col-2">
              <h1 class="fs-6 fw-bold">Reviewer:</h1>
              <div v-if="suggestion.reviewer">{{ suggestion.reviewer }}</div>
              <div v-if="!suggestion.reviewer">Reviewer not assigned</div>
            </div>
            <div class="col-2">
              <h1 class="fs-6 fw-bold">Review:</h1>
              <div v-if="suggestion.review">{{ suggestion.review }}</div>
              <div v-if="!suggestion.review">Review result not submitted yet</div>
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

export default {
  name: "SuggestionsPage",
  components: {
    MobilePanelNavigation,
    PanelNavigation,
  },
  data() {
    return {
      userSuggestions: [],
    };
  },
  methods: {
    fetchUserOpinions() {
      GetRequest.getUserSuggestions()
        .then((result) => {
          this.userSuggestions = result;
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
@media (max-width: 1200px) {
  .suggestions {
    width: 100% !important;
  }
}

@media (max-width: 550px) {
  .box {
    flex-direction: column;
  }
}
</style>
