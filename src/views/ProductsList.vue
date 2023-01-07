<template>
  <div>
    <ProductsFilter @pass-data="setFilter" />
    <ProductItem v-for="product in products" 
      :key="product.sku" 
      :name="product.name" 
      :url="product.pictureUrl"
      :sku="product.sku" />
    <ProductItem />
  </div>
</template>

<script>
import ProductItem from '@/components/product/ProductItem.vue';
import ProductsFilter from '@/components/product/ProductsFilter.vue';

export default {
  components: {
    ProductItem,
    ProductsFilter,
  },
  data() {
    return {
      products: [
        {
          sku: "skusku",
          name: "Samsung Galaxy S20",
          pictureUrl:
            "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/galaxy-s20-fe-5g-images/cloud-navy/PDP-GALLERY-S20-FE-cloud-Navy-Lockup-01-1600x1200.jpg?$product-details-jpg$",
          description: 'Ekran "6,5cala 6/128GB"',
          opinionAvg: null,
          firstName: "Uzytkownik",
          opinions: [
            {
              opinionValue: 1,
              description: "5",
              pictureUrl: "1",
              advantages: ["Super jest"],
              disadvantages: null,
              firstName: "Uzytkownik",
            },
          ],
          categories: [
            {
              categoryName: "Smartfony",
              visible: true,
            },
          ],
        },
        {
          sku: "skuu",
          name: "MacBook Air M1",
          pictureUrl:
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1664472289661",
          description: "Procesor Intel, dysk tysionc, cztery ka xD",
          opinionAvg: 3,
          firstName: "Uzytkownik2",
          opinions: [
            {
              opinionValue: 2,
              description: "1",
              pictureUrl: "1",
              advantages: ["No tak srednio bym powiedzial"],
              disadvantages: ["zdjecieSlabegoProduktu.pl"],
              firstName: "Uzytkownik2",
            },
          ],
          categories: [
            {
              categoryName: "Laptopy",
              visible: true,
            },
          ],
        },
        {
          sku: "skuu3",
          name: "Ducky One 2 Mini RGB",
          pictureUrl:
            "https://m.media-amazon.com/images/I/71cLFUb+yrL._AC_SL1500_.jpg",
          description: "Normalnie klawiatura",
          opinionAvg: null,
          firstName: "Uzytkownik3",
          opinions: [
            {
              opinionValue: 4,
              description: "1",
              pictureUrl: "1",
              advantages: ["Gitowa"],
              disadvantages: ["brak"],
              firstName: "Uzytkownik2",
            },
          ],
          categories: [
            {
              categoryName: "Klawiatury",
              visible: true,
            },
          ],
        },
      ],
      actualPage: 1,
      numberOfPages: 1,
      filter: null,
    };
  },
  methods: {
    setFilter(payload) {
      this.filter = payload;
    },
  },
}
</script>