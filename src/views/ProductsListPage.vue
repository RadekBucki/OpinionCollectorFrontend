<template>
  <div class="home container mt-3">
    <form @submit.prevent="filterProducts()">
      <div class="row justify-content-center">
        <div class="col-3">
          <input v-model="this.filters.categoryName" type="text" class="form-control" placeholder="Product name" />
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
          <select class="form-select" v-model="this.filters.searchPhrase">
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

  <div v-if="this.products" class="container">
    <div v-if="this.products" class="row products">
      <div v-for="item in this.products" :key="item" class="col-lg-10">
        <div class="p-2 mt-3 border rounded item row">
          <div class="fw-semibold fs-5 col-2">{{ item.name }}</div>
          <div class="row">
            <img :src="item.pictureUrl" class="img-fluid" alt="productImage" />
            <div class="col-3">{{ item.description }}</div>
            <div class="col-2" v-for="opinion in item.opinions" :key="opinion">
              <div>{{ opinion.advantages[0] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.products.length === 0" class="row">
      <p class="mt-5 fw-semibold fs-5">No products found.</p>
    </div>
  </div>
</template>

<script>

import {GetRequest} from "@/communication/Network.ts";

export default {
  name: "ProductsListPage",
  components: {},
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
        this.actualPage = res[0].actualPage
        this.numberOfPages = res[0].numberOfPages
        this.products = res[0].products
        this.categories = res[1]
      })
    },
    loadMoreProducts() {
      if (this.actualPage === this.numberOfPages) {
        return
      }

      GetRequest.getProducts(++this.actualPage)
          .then((res) => {
            this.actualPage = res.actualPage;
            this.numberOfPages = res.numberOfPages;
            this.products = this.products.concat(res.products);
          })
    },
    filterProducts() {
      if (!this.filters.categoryName && !this.filters.opinionAvgMin && !this.filters.opinionAvgMax && !this.filters.searchPhrase) {
        return
      }

      GetRequest.getSearchProduct(this.filters).then((res) => {
        this.products = res
      })
    },
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.loadMoreProducts()
        }
      }
    }
  },
  mounted() {
    this.fetchInitData()
    this.scroll()
  },
};
</script>
