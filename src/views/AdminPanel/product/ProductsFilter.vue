<template>
  <div class="home container mt-3">
    <h1>Filters</h1>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="name" placeholder="Type name..." v-model="name">
      <label for="name">Product Name</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="sku" placeholder="Sku" v-model.number="sku" />
      <label for="sku">Product Sku</label>
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
        <option v-for="category in getCategories" :key="category.categoryName" :value="category.categoryName">{{
          category.categoryName
        }}</option>
      </select>
      <label for="Category">Category</label>
    </div>
    <div class="button-control">
      <button type="button" class="btn btn-outline-dark" @click="submitFilters">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['passData'],
  data() {
    return {
      name: '',
      sku: '',
      avgMax: '',
      avgMin: '',
      pickedCategory: null,
      categories: [
        {
          categoryName: "Smartfony",
          visible: true,
        },
        {
          categoryName: "Laptopy",
          visible: true,
        },
        {
          categoryName: "Klawiatury",
          visible: true,
        },
      ],
    }
  },
  methods: {
    submitFilters() {
      const submitData = {
        name: this.name,
        sku: this.sku,
        avgMin: this.avgMin,
        avgMax: this.avgMax,
        pickedCategory: this.pickedCategory,
      }
      this.$emit('passData', submitData);
      this.name = '';
      this.sku = '';
      this.avgMin = '';
      this.avgMax = '';
      this.pickedCategory = null;
    }
  },
  computed: {
    getCategories() {
      return this.categories;
    }
  },
}
</script>

<style scoped>
.button-control {
  margin-top: 20px;
}
</style>