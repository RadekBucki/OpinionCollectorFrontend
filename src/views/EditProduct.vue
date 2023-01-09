<template>
  <div class="container">
    <div class="row">
      <div class="my-2 p-2 col-12">
        <RouterLink :to="{ name: 'ListAdmin' }" class="btn btn-outline-dark">
          Back to browse
        </RouterLink>
      </div>
      <div class="col">
        <DisplayEdit 
          :url="pictureUrl" 
          :name="productName" 
          :sku="sku"
          :description="description"
          :categories="categories"
          />
        <EditForm />
      </div>
    </div>
  </div>
</template>

<script>
import EditForm from '@/components/product/EditForm.vue';
import DisplayEdit from '@/components/product/DisplayEdit.vue';

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
    },
    categories() {
      return this.product.categories;
    }
  },
}
</script>
