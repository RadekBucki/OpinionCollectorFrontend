<template>
  <div class="home container mt-3">
    <form @submit.prevent="filterProducts()">
      <div class="row justify-content-center">
        <div class="col-3">
          <input v-model="this.filters.searchPhrase" type="text" class="form-control" placeholder="Product name" />
        </div>
        <div class="col-2">
          <input
              v-model="this.filters.opinionAvgMin"
              type="number"
              step="0.1"
              min="0"
              max="5"
              class="form-control"
              placeholder="avg min rating"
          />
        </div>
        <div class="col-2">
          <input
              v-model="this.filters.opinionAvgMax"
              type="number"
              step="0.1"
              min="0"
              max="5"
              class="form-control"
              placeholder="avg max rating"
          />
        </div>
        <div class="col-2">
          <select class="form-select" v-model="this.filters.categoryName">
            <option value="">Select category</option>
            <option v-for="category in this.categories" :key="category" :value="category.categoryName">{{ category.categoryName }}</option>
          </select>
        </div>
        <div class="col-1">
          <button type="submit" class="btn btn-dark mb-2">Search</button>
        </div>
      </div>
    </form>
  </div>

  <div class="container">
    <div class="row products">
      <div @mouseover="changeCursorToPointer" @mouseleave="changeCursorToDefault" @click="openProductDetails(item.sku)" v-for="item in this.products" :key="item" class="col-lg-6 col-md-12 gx-5">
        <div class="p-2 mt-3 border rounded item row text-start">
          <div class="fw-semibold fs-5 col-12">{{ item.name }}</div>
          <div class="row d-flex justify-content-between mt-3">
            <img :src="item.pictureUrl" class="col-8 img-thumbnail" alt="productImage" style="height: 300px; width: 300px; object-fit: contain" />
            <star-rating
              read-only
              class="col-4"
              :show-rating="true"
              v-bind:star-size="25"
              :fixed-points="2"
              :round-start-rating="false"
              v-if="item.opinionAvg"
              v-model:rating="item.opinionAvg" />
            <p v-if="!item.opinionAvg" class="col-4">{{ 'No opinions' }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.products?.length === 0" class="row">
      <p class="mt-5 fw-semibold fs-5">No products found.</p>
    </div>
  </div>
</template>

<script>

import {GetRequest} from "@/communication/Network.ts";
import StarRating from 'vue-star-rating'

export default {
  name: "ProductsListPage",
  components: {
    StarRating
  },
  data() {
    return {
      products: null,
      actualPage: 1,
      numberOfPages: null,
      categories: [],
      filters: {
        categoryName: '',
        opinionAvgMin: null,
        opinionAvgMax: null,
        searchPhrase: ''
      }
    };
  },
  methods: {
    fetchInitData() {
      Promise.all([GetRequest.getProducts(this.actualPage), GetRequest.getCategories()]).then((res) => {
        this.actualPage = res[0].actualPage;
        this.numberOfPages = res[0].numberOfPages;
        this.products = res[0].products;
        this.categories = res[1];
      })
    },
    loadMoreProducts() {
      if (this.actualPage === this.numberOfPages) {
        return;
      }

      GetRequest.getProducts(++this.actualPage)
          .then((res) => {
            this.actualPage = res.actualPage;
            this.numberOfPages = res.numberOfPages;
            this.products = this.products.concat(res.products);
          })
    },
    filterProducts() {
      GetRequest.getSearchProduct(this.filters).then((res) => {
        this.products = res;
      })
    },
    scroll () {
      window.onscroll = () => {
        const bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.loadMoreProducts();
        }
      }
    },
    openProductDetails(sku) {
      document.body.style.cursor = 'default';
      this.$router.push({ name: 'Product', params: { sku: sku } })
    },
    changeCursorToPointer() {
      document.body.style.cursor = 'pointer';
    },
    changeCursorToDefault() {
      document.body.style.cursor = 'default';
    },
  },
  mounted() {
    this.fetchInitData();
    this.scroll();
  },
};
</script>