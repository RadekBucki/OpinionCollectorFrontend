<template>
  <div class="container">
    <div class="row">
      <div class="my-2 p-2 col-12">
        <RouterLink :to="{ name: 'ListAdmin' }" class="btn btn-outline-dark">
          Back to browse
        </RouterLink>
        <div class="mt-4">
          <button 
            type="button" 
            class="btn btn-outline-dark" 
            @click="setSelectedView('editProduct')"
            :disabled="disableButtonEdit
            ">
            Edit Product
          </button>
          <button 
            type="button" 
            class="btn btn-outline-dark" 
            @click="setSelectedView('addProduct')"
            :disabled="disableButtonAdd
            ">
            Add Product
          </button>
          <button 
            type="button" 
            class="btn btn-outline-danger" 
            @click="removeProduct()
            ">
            Remove Product
          </button>
        </div>
      </div>
      <div v-if="selectedView === 'editProduct'">
        <div class="my-2 p-2 col-12">
          <button @click="saveProduct()" type="button" class="btn btn-outline-dark">Save Edit</button>
        </div>
        <div class="col">
          <DisplayEdit :url="pictureUrl" :name="productName" :sku="sku" :description="description"
            :categories="categories" />
          <EditForm :categoriesOwned="categories" @edit-data="setEdit" />
        </div>
      </div>
      <div v-else>
        <AddProduct />
      </div>
    </div>
  </div>
</template>

<script>
import EditForm from '@/components/product/EditForm.vue';
import DisplayEdit from '@/components/product/DisplayEdit.vue';
import AddProduct from './AddProduct.vue';

export default {
  components: {
    EditForm,
    DisplayEdit,
    AddProduct,
  },
  data() {
    return {
      selectedView: 'editProduct',
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
  methods: {
    setEdit(payload) {
      this.product.sku = payload.sku;
      this.product.name = payload.name;
      this.product.pictureUrl = payload.pictureUrl;
      this.product.description = payload.description;
      this.product.categories = payload.categories;
    },
    setSelectedView(cmp) {
      this.selectedView = cmp;
    },
    removeProduct() {
      //DELETE
    },
    saveProduct() {
      //PUT
    },
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
    },
    disableButtonEdit() {
      if (this.selectedView === 'editProduct') {
        return true;
      }
      return false;
    },
    disableButtonAdd() {
      if (this.selectedView === 'addProduct') {
        return true;
      }
      return false;
    }
  },
}
</script>
