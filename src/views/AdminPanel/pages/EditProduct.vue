<template>
  <div class="container">
    <DisplayEdit :url="product.pictureUrl"/>
    <EditForm />
  </div>
</template>

<script>
import EditForm from '@/views/AdminPanel/product/EditForm.vue';
import DisplayEdit from '@/views/AdminPanel/product/DisplayEdit.vue';

export default {
  components: {
    EditForm,
    DisplayEdit,
  },
  data() {
    return {
      product: {
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
      }
    }
  },
  computed: {
    productName() {
      return this.product.name;
    },
    pictureUrl() {
      return this.product.pictureUrl;
    },
    description() {
      return this.product.description;
    },
    sku() {
      return this.product.sku;
    }
  }
}
</script>
