<template>
  <div class="home container mt-3">
    <h1>Filters</h1>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="name" placeholder="Type name..." v-model="name">
      <label for="name">Product Name</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="avgMin" placeholder="Average minimum value" v-model.number="avgMin" />
      <label for="avgMin">Average minimum</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="avgMax" placeholder="Average minimum value" v-model.number="avgMax" />
      <label for="avgMax">Average maximum</label>
    </div>
    <div class="form-floating">
      <select class="form-select" id="Category" aria-label="Category" v-model="pickedCategory">
        <option v-for="category in getCategories" 
          :key="category.categoryName" 
          :value="category.categoryName"
          >
          {{ category.categoryName }}
        </option>
      </select>
      <label for="Category">Category</label>
    </div>
    <div class="button-control">
      <button 
        type="button" 
        class="btn btn-outline-dark" 
        @click="submitFilters">Search</button>
    </div>
  </div>
</template>

<script>
import {GetRequest} from "@/communication/Network.ts";

export default {
  emits: ['passData'],
  data() {
    return {
      name: '',
      avgMax: '',
      avgMin: '',
      pickedCategory: null,
      categories: [],
    }
  },
  methods: {
    submitFilters() {
      const submitData = {
        searchPhrase: this.name,
        opinionAvgMin: this.avgMin,
        opinionAvgMax: this.avgMax,
        categoryName: this.pickedCategory,
      }
      this.$emit('passData', submitData);
      this.name = '';
      this.avgMin = null;
      this.avgMax = null;
      this.pickedCategory = '';
    },
    fetchCategories() {
      GetRequest.getCategories().then((res) => {
        this.categories = res;
      })
    },
  },
  computed: {
    getCategories() {
      return this.categories;
    }
  },
  mounted() {
    this.fetchCategories();
  }
}
</script>

<style scoped>
.button-control {
  margin-top: 20px;
}
</style>