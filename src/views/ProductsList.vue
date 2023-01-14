<template>
  <div>
    <ProductsFilter @pass-data="setFilter" />
    <ProductItem v-for="product in products" 
      :key="product.sku" 
      :name="product.name" 
      :url="product.pictureUrl"
      :sku="product.sku" 
      />
  </div>
</template>

<script>
import {GetRequest} from "@/communication/Network.ts";

import ProductItem from '@/components/product/ProductItem.vue';
import ProductsFilter from '@/components/product/ProductsFilter.vue';

export default {
  components: {
    ProductItem,
    ProductsFilter,
  },
  data() {
    return {
      products: null,
      actualPage: 1,
      numberOfPages: null,
      filter: null,
    };
  },
  methods: {
    setFilter(payload) {
      this.filter = payload;
      //this.filterProducts();
    },
    fetchInitData() {
      GetRequest.getProducts(this.actualPage).then((res) => {
        this.actualPage = res.actualPage;
        this.numberOfPages = res.numberOfPages;
        this.products = res.products;
      })
    },
    filterProducts() {
      GetRequest.getSearchProduct(this.filters).then((res) => {
        this.products = res;
        console.log(res);
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
  mounted() {
    this.fetchInitData();
    this.scroll();
  },
}
</script>