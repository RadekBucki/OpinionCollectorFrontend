<template>
  <div>
    <ProductsFilter v-if="!selectedView" 
      v-model:phrase="phrase" 
      v-model:min="min"
      v-model:max="max"
      v-model="cat"
      />
    <div class="button-control mt-3">
      <button v-if="!selectedView"
        type="button" 
        class="btn btn-outline-dark" 
        @click="submitFilters()">Search</button>
        <button 
        type="button" 
        class="btn btn-outline-dark mt-3" 
        @click="setSelectedView()"
        >
        {{ buttonText }}
      </button>
    </div>
    <div v-if="selectedView">
      <AddProduct />
    </div>
    <div v-else>
      <ProductItem v-for="product in products" 
        :key="product.sku" 
        :name="product.name" 
        :url="product.pictureUrl"
        :sku="product.sku" 
        />
      </div>
  </div>
</template>

<script>
import { GetRequest } from "@/communication/Network.ts";

import ProductItem from '@/components/product/ProductItem.vue';
import ProductsFilter from '@/components/product/ProductsFilter.vue';
import AddProduct from '../../components/product/AddProduct.vue';

export default {
  components: {
    ProductItem,
    ProductsFilter,
    AddProduct,
  },
  data() {
    return {
      selectedView: false,
      products: null,
      actualPage: 1,
      numberOfPages: null,
      cat: '',
      min: null,
      max: null,
      phrase: ''
    };
  },
  methods: {
    submitFilters() {
      this.filterProducts();
    },
    setSelectedView() {
      this.selectedView = !this.selectedView;
    },
    fetchInitData() {
      GetRequest.getProducts(this.actualPage).then((res) => {
        this.actualPage = res.actualPage;
        this.numberOfPages = res.numberOfPages;
        this.products = res.products;
      })
    },
    filterProducts() {
      const filters = {
        categoryName: this.cat,
        opinionAvgMin: this.min === null ? null : parseInt(this.min),
        opinionAvgMax: this.max === null ? null : parseInt(this.max),
        searchPhrase: this.phrase
      };
      GetRequest.getSearchProduct(filters).then((res) => {
        this.products = res;
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
    scroll () {
      window.onscroll = () => {
        const bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.loadMoreProducts();
        }
      }
    },
  },
  computed: {
    buttonText() {
      return this.selectedView ? 'Back' : 'Add New Product';
    }
  },
  mounted() {
    this.fetchInitData();
    this.scroll();
  },
}
</script>

<style scoped>
.button-control {
  display: flex;
  flex-direction: column;
}
</style>