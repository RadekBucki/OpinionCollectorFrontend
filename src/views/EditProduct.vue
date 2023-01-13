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
            :url="pictureUrl" 
            :name="productName" 
            :sku="sku" 
            :description="description"
            :categories="categories" />
          <EditForm 
            :categoriesOwned="categories" 
            :info="infoProduct"
            @edit-data="setEdit" />
        </div>
      </div>
      <div v-else>
        <AddProduct />
      </div>
    </div>
  </div>
</template>

<script>
import { GetRequest, DeleteRequest, PutRequest } from "@/communication/Network.ts";

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
      },
      productInfo: {},
      visible: true,
    }
  },
  methods: {
    setEdit(payload) {
      this.product.sku = payload.sku;
      this.product.name = payload.name;
      this.product.pictureUrl = payload.pictureUrl;
      this.product.description = payload.description;
      this.product.categories = payload.categories;
      this.visible = payload.visible;
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
      const payload = {
        categoryNames: this.product.categories.map(element => element.categoryName),
        description: this.product.description,
        name: this.product.name,
        pictureUrl: this.product.pictureUrl,
        sku: this.product.sku,
        visible: this.visible,
      }
      PutRequest.editProduct(payload).then(res => {
        this.product = res;
        this.$router.push({ name: 'ListAdmin' })
      });
    },
    loadProduct() {
      GetRequest.getProductDetails(this.$route.params.sku).then(res => {
        this.product = res;
        this.productInfo = {
          sku: this.product.sku,
          name: this.product.name,
          pictureUrl: this.product.pictureUrl,
          description: this.product.description,
        }
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
    infoProduct() {
      return this.productInfo;
    }
  },
  created() {
    this.loadProduct();
  }
}
</script>
