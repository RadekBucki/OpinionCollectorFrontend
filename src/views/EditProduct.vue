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
          <DisplayEdit 
            v-if="!isLoading"
            :url="pictureUrl" 
            :name="productName" 
            :sku="sku" 
            :description="description"
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
import { GetRequest, DeleteRequest } from "@/communication/Network.ts";

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
      isLoading: false,
      product: {
        sku: '',
        name: '',
        pictureUrl: '',
        description: '',
        opinionAvg: null,
        firstName: '',
        opinions: [
          {
            opinionValue: null,
            description: '',
            pictureUrl: '',
            advantages: [],
            disadvantages: null,
            firstName: '',
          },
        ],
        categories: [],
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
      DeleteRequest.deleteProduct(this.$route.params.sku).then(res => {
        this.product = res;
      });
    },
    saveProduct() {
      // this.product.categories.forEach(category => {
      //   PutRequest.editCategory(category)
      // })
      const payload = {
        description: this.product.description,
        name: this.product.name,
        pictureUrl: this.product.pictureUrl,
        sku: this.product.sku,
      }
      console.log(payload);
      const test = [
        ...this.product.categories,
      ]
      console.log(test);
      // PutRequest.editProduct(payload).then(res => {
      //   this.product = res;
      // });
    },
    loadProduct() {
      this.isLoading = true;
      GetRequest.getProductDetails(this.$route.params.sku).then(res => {
        this.product = res;
        this.isLoading = false;
      })
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
    },
  },
  created() {
    this.loadProduct();
  }
}
</script>
